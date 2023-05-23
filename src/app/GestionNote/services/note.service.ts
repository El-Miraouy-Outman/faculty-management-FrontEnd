import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Note} from "../Model/note.model";
import {environment} from "../../../environments/environment";
import {NoteRequest} from "../Model/noteRequest.model";

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private http:HttpClient) {
  }
  public  getNotesEtud(apogee : number) :Observable<Array<Note>>{
    return this.http.get<Array<Note>>(`${environment.apiNote}/students/${apogee}`)
  }
  public searchNoteByApAndModule(idFliere: number, idModule: number): Observable<Array<Note>> {
    return this.http.get<Array<Note>>(`${environment.apiNote}/filieres/${idFliere}/modules/${idModule}`);

  }
  public saveNote(note:NoteRequest):Observable<Note>{
    return this.http.post<Note>(`${environment.apiNote}`,note);
  }

  public  UpdateNote(note:NoteRequest):Observable<Note>{
    return this.http.put<Note>(`${environment.apiNote}/students/${note.apogee}/modules/${note.idModule}`,note);
  }
  deleteNote(apogee: number,idModule:number) :Observable<any>{
    return this.http.delete<any>(`${environment.apiNote}/students/${apogee}/modules/${idModule}`);
  }
  private noteSource = new Subject<Note>();

  note$ = this.noteSource.asObservable();

  emitNoteData(note: any) {
    this.noteSource.next(note);
  }


}
