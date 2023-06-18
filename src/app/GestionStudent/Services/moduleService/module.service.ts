import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Module} from "../../../GestionNote/Model/module.model";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http:HttpClient) { }
  public  GetModules():Observable<Array<Module>>{
    return this.http.get<Array<Module>>(environment.apiModule);
  }

  public  GetModulesByFiliere(id: number):Observable<Array<Module>>{
    return this.http.get<Array<Module>>(`${environment.apiModule}/getModuleByFiliere/${id}`);
    console.log("here is me in the module service !!!");
  }

  public deleteModule(id : number) : Observable<any> {
    return this.http.delete(`${environment.apiModule}/${id}`);

  }

}


