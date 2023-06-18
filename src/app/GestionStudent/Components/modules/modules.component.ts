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
        console.log(data)
        this.originalOptionsFiliere = data;
      });

    this.ModuleByFiliereForm = this.fb.group({
      filiere: this.fb.control("")

    });


  }


  searchModuleByFiliere() {
    this.moduleService.GetModulesByFiliere(this.selectedModule.idFiliere).subscribe({
      next: (data) => {
        console.log("here our data ----------"+data)
        this.optionsModule = data;
        this.moduleName = this.selectedModule.name;
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

/*
  deleteFiliere(id: number) {
    const confirmed = confirm('Vous voulez supprimer cette Filiere?');
    if (confirmed) {
      this.filiereService.deleteFiliere(id)
        .subscribe({
          next: value => {
            alert('Filiere supprimé !!');
            this.searchFiliereByDiplomat();
          },
          error: console.log
        });
    }
  }


  updateFiliere(id : number){


    //this.filiereService.updateFiliere(id,this.selectedFiliere)

  }



  onEditFiliere(filiere: Filiere) {
    this.router.navigateByUrl("/editFiliere/"+filiere.id);
  }
}
*/
}
