import {Component, OnInit} from '@angular/core';
import {NoteService} from "../../../service/note.service";
import {Note} from "../../../Model/note.model";
import {Observable} from "rxjs";


const heros = [
  {apogee:1,nom:'outman',prenom:'mieraouy'},
  {apogee:2,nom:'outman',prenom:'mieraouy'},
  {apogee:3,nom:'outman',prenom:'mieraouy'}
];
@Component({
  selector: 'app-listenotes',
  templateUrl: './listenotes.component.html',
  styleUrls: ['./listenotes.component.css']
})
export class ListenotesComponent implements OnInit{
  notes! : Array<Note>;
  errorMessage : String | undefined ;
  heross=heros;
  constructor(private noteService:NoteService) {
  }
  ngOnInit(): void {
    console.log(this.heross);
    this.noteService.getNotes().subscribe({
        next : (data)=>{
          console.log(" hello ")
          this.notes=data;
          console.log(data);
          console.log(" hello ")
        },
        error : err => {
          this.errorMessage=err.message;
          console.log("pas de donne");
        }
      });

  }

}
