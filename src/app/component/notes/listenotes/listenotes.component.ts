import {Component, OnInit} from '@angular/core';
import {NoteService} from "../../../service/note.service";
import {Note} from "../../../Model/note.model";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";



@Component({
  selector: 'app-listenotes',
  templateUrl: './listenotes.component.html',
  styleUrls: ['./listenotes.component.css']
})
export class ListenotesComponent implements OnInit{
  notes! : Array<Note>;
  errorMessage : String | undefined ;

  NoteByFiliereAndModuleForm : FormGroup | undefined;
  filiereName! : String ;
  moduleName! : String ;
  constructor(private noteService:NoteService,private fb:FormBuilder) {
  }
  ngOnInit(): void {
      this.NoteByFiliereAndModuleForm=this.fb.group({
        idFiliere : this.fb.control(""),
        idModule : this.fb.control("")
      });


    this.noteService.getNotes().subscribe({
        next : (data)=>{
          this.notes=data;
          console.log(data);
          this.filiereName=data[0].student.filiere.name;
          this.moduleName=data[0].module.name;
        },
        error : err => {
          this.errorMessage=err.message;
          console.log("pas de donne");
        }
      });

  }
  searchNoteByFiliereAndModule() {
    let filiereStudentSearch=this.NoteByFiliereAndModuleForm?.value.idFiliere;
    let idModuleSearch=this.NoteByFiliereAndModuleForm?.value.idModule;
    this.noteService.searchNoteByApAndModule(filiereStudentSearch,idModuleSearch).subscribe({
      next : (data)=>{
        this.notes=data;
        console.log(data);
        this.filiereName=data[0].student.filiere.name;
        this.moduleName=data[0].module.name;
      },
      error : err => {
        this.errorMessage=err.message;
        console.log("pas de donne");
      }
    });

  }


}
