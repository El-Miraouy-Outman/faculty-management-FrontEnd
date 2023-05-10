import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NoteRequest} from "../../Model/noteRequest.model";
import {NoteService} from "../../services/note.service";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {PopupMsgComponent} from "../../../GeneralComponents/popupComponenets/popup-msg/popup-msg.component";

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})
export class AddnoteComponent implements OnInit{

  newNoteForm! : FormGroup;

  constructor(private fb: FormBuilder,
              private servicenote:NoteService,
              public modalRefAdd: MdbModalRef<AddnoteComponent> ,
              ) {
  }
  ngOnInit(): void {
    this.newNoteForm=this.fb.group({
       note : this.fb.control("0"),
       idModule : this.fb.control("0"),
       apogee : this.fb.control("0")
    })
  }

  saveNote() {
    let note :NoteRequest=this.newNoteForm.value;
    console.log(note);
    this.servicenote.saveNote(note).subscribe({
      next: data =>{
        this.modalRefAdd.close("success")
      },
      error :err => {
        this.modalRefAdd.close("Id Module or Id Student not exist")
      }
    });
  }
}
