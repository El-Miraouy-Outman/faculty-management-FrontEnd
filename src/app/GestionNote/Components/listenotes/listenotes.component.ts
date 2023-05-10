import {Component, OnInit} from '@angular/core';
import {NoteService} from "../../services/note.service";
import {Note} from "../../Model/note.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FiliereService} from "../../../GestionStudent/Services/filiereService/filiere.service";
import {Filiere} from "../../Model/filiere.model";
import {ModuleService} from "../../../GestionStudent/Services/moduleService/module.service";
import {Module} from "../../Model/module.model";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {EditNoteComponent} from "../edit-note/edit-note.component";
import {PopupMsgComponent} from "../../../GeneralComponents/popupComponenets/popup-msg/popup-msg.component";



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
  modalRef: MdbModalRef<any> | null = null;
  private modalAlertRef!: MdbModalRef<PopupMsgComponent>;


  constructor(private noteService:NoteService,
              private filiereService:FiliereService,
              private moduleService:ModuleService,
              private fb:FormBuilder,
              private modalService:MdbModalService) {
  }
  ngOnInit(): void {
    this.filiereService.getFilieres().subscribe(data => {
      this.optionsFiliere = data;
    });
      this.NoteByFiliereAndModuleForm=this.fb.group({
        idFiliere : this.fb.control(""),
        idModule : this.fb.control("")
      });

  }
  searchNoteByFiliereAndModule() {
    let filiereStudentSearch=this.selectedF.id
    let idModuleSearch=this.selectedM.id;
    this.noteService.searchNoteByApAndModule(filiereStudentSearch,idModuleSearch).subscribe({
      next : (data)=>{
        console.log(data)
        this.notes=data;
        this.filiereName=this.selectedF.name;
        this.moduleName=this.selectedM.name;
      },
      error : err => {
        this.errorMessage=err.message;
      }
    });

  }


  onFiliereChange(selectedFiliere: any) {
    this.selectedF=selectedFiliere
    this.optionsModules=this.selectedF['modules']
  }

  onModuleChange(selectedModule: any) {
      this.selectedM=selectedModule
    this.searchNoteByFiliereAndModule()
  }

  OnUpdateNote(note: Note) {
    this.modalRef = this.modalService.open(EditNoteComponent, {
      data: {note: note, module: this.selectedM}
    });
    this.modalRef.onClose.subscribe((message: string) => {
      this.modalAlertRef = this.modalService.open(PopupMsgComponent, {
        data: { title: message }
      });
    });

    this.searchNoteByFiliereAndModule()

  }
}
