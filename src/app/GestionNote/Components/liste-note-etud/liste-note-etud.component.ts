import {Component, OnInit} from '@angular/core';
import {Note} from "../../Model/note.model";
import {NoteService} from "../../services/note.service";

@Component({
  selector: 'app-liste-note-etud',
  templateUrl: './liste-note-etud.component.html',
  styleUrls: ['./liste-note-etud.component.css']
})
export class ListeNoteEtudComponent  implements OnInit{
  notes! : Array<Note>;
  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
    this.noteService.getNotesEtud(123456).subscribe(data => {
      this.notes = data;
      console.log(data);
    });
  }

  calculateTotalNote(): number {
    let totalNote = 0;
    for (let note of this.notes) {
      totalNote += note.note;
    }
    totalNote = totalNote / this.notes.length;
    return totalNote;
  }

  calculateResult(): string {
    const totalNote = this.calculateTotalNote();
    if (totalNote >= 10) {
      return 'Validé';
    } else {
      return 'Non Validé';
    }
  }
}
