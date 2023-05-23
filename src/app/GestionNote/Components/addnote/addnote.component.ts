import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NoteRequest} from "../../Model/noteRequest.model";
import {NoteService} from "../../services/note.service";
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {Module} from "../../Model/module.model";

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})
export class AddnoteComponent implements OnInit{

  newNoteForm! : FormGroup;
  @Input() module!:Module

  constructor(private fb: FormBuilder,
              private servicenote:NoteService,
              public modalRefAdd: MdbModalRef<AddnoteComponent> ,
              ) {
  }
  ngOnInit(): void {
    this.newNoteForm=this.fb.group({
       note : this.fb.control("0"),
       idModule : this.fb.control(this.module.id),
       apogee : this.fb.control("0")
    })
  }

  saveNote() {
    let note :NoteRequest=this.newNoteForm.value;
    console.log(note);
    this.servicenote.saveNote(note).subscribe({
      next: data =>{
        this.servicenote.emitNoteData(data)
        this.modalRefAdd.close("success")

      },
      error :err => {
        console.log(err)
        this.modalRefAdd.close(err.error["message"])
      }
    });
  }
}
