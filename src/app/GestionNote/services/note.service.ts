import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Note} from "../Model/note.model";
import {environment} from "../../../environments/environment";
import {NoteRequest} from "../Model/noteRequest.model";

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private http:HttpClient) { }
    public  getNotes() :Observable<Array<Note>>{
      return this.http.get<Array<Note>>(`${environment.apiNote}/filieres/1/modules/1`)

  }
  public searchNoteByApAndModule(apogee: number, idModule: number): Observable<Array<Note>> {
    console.log(apogee+"   "+idModule)
    return this.http.get<Array<Note>>(`${environment.apiNote}/filieres/${apogee}/modules/${idModule}`);

  }
  public saveNote(note:NoteRequest):Observable<Note>{
    console.log(environment.apiNote)
    return this.http.post<Note>(`${environment.apiNote}`,note);
  }

}
