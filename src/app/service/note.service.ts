import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Note} from "../Model/note.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  urlHost :string ="http://localhost:8100/api/notes/";

  constructor(private http:HttpClient) { }
    public  getNotes() :Observable<Array<Note>>{
      return this.http.get<Array<Note>>(`${environment.apiNote}/filieres/4/modules/2`)

  }
  public searchNoteByApAndModule(apogee: number, idModule: number): Observable<Array<Note>> {
    return this.http.get<Array<Note>>(`${environment.apiNote}/filieres/${apogee}/modules/${idModule}`);

  }

}