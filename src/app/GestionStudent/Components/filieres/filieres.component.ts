import {Component, NgModule, OnInit, ViewChild} from '@angular/core';
import {FiliereService} from "../../Services/filiereService/filiere.service";
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {Filiere} from "../../../GestionNote/Model/filiere.model";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";


@Component({
  selector: 'app-filieres',
  templateUrl: './filieres.component.html',
  styleUrls: ['./filieres.component.css']
})
export class FilieresComponent implements OnInit {
  errorMessage: String | undefined;
  filiereName!: String;
  selectedFiliere!: Filiere;
  FiliereByDiplomatForm: FormGroup | undefined;
  optionsFiliere!: Filiere[];
  originalOptionsFiliere!: any[];
  @ViewChild('updateForm') form: NgForm | undefined;



  constructor(private filiereService: FiliereService, private fb: FormBuilder,private router : Router) {
  }

  ngOnInit(): void {
    this.filiereService.getFilieres().subscribe(
      data => {
        console.log(data)
        this.originalOptionsFiliere = data;
      });

    this.FiliereByDiplomatForm = this.fb.group({
      diplomat: this.fb.control("")

    });


  }


  searchFiliereByDiplomat() {
    let diplomat = this.selectedFiliere.diplomat;
    this.filiereService.getFiliereByDiplomat(diplomat).subscribe({
      next: (data) => {
        this.optionsFiliere = data;
        this.filiereName = this.selectedFiliere.name;
      },
      error: err => {
        this.errorMessage = err.message;
      }
    });
  }


  onFiliereChange(selectedFiliere: any) {
    this.selectedFiliere = selectedFiliere;
    this.searchFiliereByDiplomat()
  }


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
