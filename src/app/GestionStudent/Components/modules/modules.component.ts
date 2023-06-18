import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Filiere } from 'src/app/GestionNote/Model/filiere.model';
import { ModuleService } from '../../Services/moduleService/module.service';
import { Router } from '@angular/router';
import { FiliereService } from '../../Services/filiereService/filiere.service';
import { Module } from 'src/app/GestionNote/Model/module.model';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit  {


  errorMessage: String | undefined;
  moduleName!: String;
  selectedFiliere!: Filiere;
  selectedModule!: Module;
  ModuleByFiliereForm: FormGroup | undefined;
  optionsFiliere!: Filiere[];
  optionsModule!: Module[];

  originalOptionsFiliere!: any[];
  originalOptionsModule !: any[];
  //@ViewChild('updateForm') form: NgForm | undefined;



  constructor(private moduleService: ModuleService,private filiereService: FiliereService, private fb: FormBuilder,private router : Router) {
  }

  ngOnInit(): void {
    this.filiereService.getFilieres().subscribe(
      data => {
        this.originalOptionsFiliere = data;
      });

    this.ModuleByFiliereForm = this.fb.group({
      filiere: this.fb.control("")

    });


  }


  searchModuleByFiliere() {
    let id = this.selectedFiliere.id;
    this.moduleService.GetModulesByFiliere(id).subscribe({
      next: (data) => {
        console.log("here our data ----------"+data)
        this.optionsModule = data;
      },
      error: err => {
        this.errorMessage = err.message;
      }
    });
  }


  onFiliereChange(selectedFiliere: any) {
    this.selectedFiliere = selectedFiliere;
    this.searchModuleByFiliere()
  }



  ondeleteModule(id: number) {
    const confirmed = confirm('Vous voulez supprimer ce module?');
    if (confirmed) {
      this.moduleService.deleteModule(id)
        .subscribe({
          next: value => {
            alert('Filiere supprimé !!');
            this.searchModuleByFiliere();
          },
          error: console.log
        });
    }
  }







  onEditModule(module: Module) {
    this.router.navigateByUrl("/editModule/"+module.id);
  }

}
