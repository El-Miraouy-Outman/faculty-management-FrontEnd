import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Note} from "../../Model/note.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private http:HttpClient) { }
    public  getNotes() :Observable<Array<Note>>{
      return this.http.get<Array<Note>>(`${environment.apiNote}filieres/1/modules/1`)

  }
  public searchNoteByApAndModule(apogee: number, idModule: number): Observable<Array<Note>> {
    return this.http.get<Array<Note>>(`${environment.apiNote}filieres/${apogee}/modules/${idModule}`);

  }

}
