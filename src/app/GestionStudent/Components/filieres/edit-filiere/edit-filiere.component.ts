import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {FiliereService} from "../../../Services/filiereService/filiere.service";

@Component({
  selector: 'app-edit-filiere',
  templateUrl: './edit-filiere.component.html',
  styleUrls: ['./edit-filiere.component.css']
})
export class EditFiliereComponent implements OnInit{

  filiereId !: number;
  submitted: boolean = false;
  filiereFormGroup !: FormGroup;


  constructor(private activatedRoute: ActivatedRoute, private filiereService: FiliereService, private fb: FormBuilder,private router : Router) {
    this.filiereId = activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {

    this.filiereService.getFiliere(this.filiereId).subscribe(
      filiere => {
        this.filiereFormGroup = this.fb.group({
          id: [filiere.id, Validators.required],
          name: [filiere.name, Validators.required],
          diplome: [filiere.diplomat, Validators.required],
        })
      }
    );
  }


  onEditFiliere() {
      this.filiereService.updateFiliere(this.filiereFormGroup.value).subscribe(
        data => {
          alert("Filiere updated as successfully ");

        }
      );

    this.router.navigateByUrl("/filieres");
    console.log("wssssl");
  }
}
