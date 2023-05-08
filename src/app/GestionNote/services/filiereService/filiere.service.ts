import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {Filiere} from "../../Model/filiere.model";

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  constructor(private http:HttpClient) { }

  public getFilieres():Observable<Array<Filiere>>{
    return this.http.get<Array<Filiere>>(environment.apiFiliere);
  }
}
