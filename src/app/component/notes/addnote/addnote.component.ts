import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})
export class AddnoteComponent implements OnInit{

  newNoteForm! : FormGroup;
  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.newNoteForm=this.fb.group({
       note : this.fb.control(""),
       idModule : this.fb.control(""),
       apogee : this.fb.control("")
    })
  }

  saveNote() {

  }
}
