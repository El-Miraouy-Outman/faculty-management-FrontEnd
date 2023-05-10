import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NoteService} from "../../services/note.service";
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {NoteRequest} from "../../Model/noteRequest.model";
import {Note} from "../../Model/note.model";
import {Module} from "../../Model/module.model";
import {PopupMsgComponent} from "../../../GeneralComponents/popupComponenets/popup-msg/popup-msg.component";

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit{
  @Input() note!: Note
  @Input() module!:Module
  newNoteForm! : FormGroup;
  constructor(private fb: FormBuilder,
              private servicenote:NoteService,
              private EditRef:MdbModalRef<EditNoteComponent>

  ) {
  }
  ngOnInit(): void {

    this.newNoteForm=this.fb.group({
      note : this.fb.control(this.note.note),
      idModule : this.fb.control(this.module.id),
      apogee : this.fb.control(this.note.student.apogee)
    })
  }

  UpdateNote() {
    let note :NoteRequest=this.newNoteForm.value;
    this.servicenote.UpdateNote(note).subscribe({
      next: data =>{
        this.EditRef.close("success")
      },
      error :err => {
        this.EditRef.close("Echec")
      }
    });
  }

}
