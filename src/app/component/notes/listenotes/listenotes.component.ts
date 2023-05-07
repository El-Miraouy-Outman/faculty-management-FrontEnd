import {Component, OnInit} from '@angular/core';
import {NoteService} from "../../../services/noteService/note.service";
import {Note} from "../../../Model/note.model";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FiliereService} from "../../../services/filiereService/filiere.service";
import {Filiere} from "../../../Model/filiere.model";
import {ModuleService} from "../../../services/moduleService/module.service";
import {Module} from "../../../Model/module.model";



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
  optionsFiliere!: Filiere[];
  optionsModules!: Module[];
  selectedF!:Filiere
  selectedM!: Module;
  constructor(private noteService:NoteService,private filiereService:FiliereService,private moduleService:ModuleService,private fb:FormBuilder) {
  }
  ngOnInit(): void {
    this.filiereService.getFilieres().subscribe(data => {
      console.log(data)
      this.optionsFiliere = data;
    });
      this.NoteByFiliereAndModuleForm=this.fb.group({
        idFiliere : this.fb.control(""),
        idModule : this.fb.control("")
      });


   // this.noteService.getNotes().subscribe({
     //   next : (data)=>{
        //  console.log(data)
        //  this.notes=data;
         // this.filiereName=data[0].student.filiere.name;
         // this.moduleName=data[0].module.name;
      //  },
     //   error : err => {
          //this.errorMessage=err.message;
         // console.log("pas de donne");
     //   }
    //  });

  }
  searchNoteByFiliereAndModule() {
    console.log(this.selectedM)
    let filiereStudentSearch=1
    let idModuleSearch=this.selectedM.id;
    this.noteService.searchNoteByApAndModule(filiereStudentSearch,idModuleSearch).subscribe({
      next : (data)=>{
        this.notes=data;
        console.log(data);
        this.filiereName=this.selectedF.name;
        this.moduleName=this.selectedM.name;
      },
      error : err => {
        this.errorMessage=err.message;
        console.log("pas de donne");
      }
    });

  }


  onFiliereChange(selectedFiliere: any) {
    this.selectedF=selectedFiliere
    this.optionsModules=selectedFiliere['modules']
  }

  onModuleChange(selectedModule: any) {
      this.selectedM=selectedModule
    this.searchNoteByFiliereAndModule()
  }
}
