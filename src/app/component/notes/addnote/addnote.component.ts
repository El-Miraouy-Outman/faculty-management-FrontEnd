import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NoteService} from "../../../service/note.service";
import {NoteRequest} from "../../../Model/noteRequest.model";

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})
export class AddnoteComponent implements OnInit{

  newNoteForm! : FormGroup;
  constructor(private fb: FormBuilder,private servicenote:NoteService) {
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
        alert("note est enregistrer");
      },
      error :err => {
        console.log("note n' est pas ajouter");
      }
    });
  }
}
