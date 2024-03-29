import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {Filiere} from "../../../GestionNote/Model/filiere.model";
import {Note} from "../../../GestionNote/Model/note.model";

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  constructor(private http: HttpClient) {
  }
  filiere : any;
  public getFilieres(): Observable<Array<Filiere>> {
    console.log("hello lien "+environment.apiFiliere);

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200'
      });

     // return this.http.get(this.apiUrl + 'filieres', { headers });

    this.filiere=this.http.get<Array<Filiere>>(environment.apiFiliere,{headers} );
    console.log(this.filiere);
    return this.http.get<Array<Filiere>>(environment.apiFiliere);
  }

  public getFiliereByDiplomat(diplomat: string): Observable<Array<Filiere>> {
    console.log(diplomat)
    return this.http.get<Array<Filiere>>(`${environment.apiFiliere}/getFiliereByDiplomat/${diplomat}`);

  }
  public deleteFiliere(id : number) : Observable<any> {
    console.log(`${environment.apiFiliere}/${id}`)
    return this.http.delete(`${environment.apiFiliere}/${id}`);

  }

  // public updateFiliere(id : number, data : any) : Observable<any> {
  //   return this.http.put(`${environment.apiFiliere}/${id}`, data);
  // }
  updateFiliere(filiere : Filiere) : Observable<Filiere>{
    let host = environment.apiFiliere;
    return this.http.put<Filiere>(host+"/"+filiere.id,filiere);
  }


  public getFiliere( id : number): Observable<Filiere> {
    return this.http.get<Filiere>(`${environment.apiFiliere}/${id}`);
  }
}
