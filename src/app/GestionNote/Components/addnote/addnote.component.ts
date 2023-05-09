import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NoteRequest} from "../../Model/noteRequest.model";
import {NoteService} from "../../services/note.service";
import {MdbModalRef} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})
export class AddnoteComponent implements OnInit{

  newNoteForm! : FormGroup;
  constructor(private fb: FormBuilder,private servicenote:NoteService,public modalRef: MdbModalRef<AddnoteComponent>) {
  }
  ngOnInit(): void {
    this.newNoteForm=this.fb.group({
       note : this.fb.control(""),
       idModule : this.fb.control(""),
       apogee : this.fb.control("")
    })
  }

  saveNote() {
    let note :NoteRequest=this.newNoteForm.value;
    console.log(note);
    this.servicenote.saveNote(note).subscribe({
      next: data =>{
        this.modalRef.close()
      },
      error :err => {
        console.log(err);
      }
    });
  }
}
