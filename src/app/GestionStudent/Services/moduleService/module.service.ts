import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Module} from "../../../GestionNote/Model/module.model";
import {environment} from "../../../../environments/environment";
import {Filiere} from "../../../GestionNote/Model/filiere.model";

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http:HttpClient) { }
  public  GetModules():Observable<Array<Module>>{
    return this.http.get<Array<Module>>(environment.apiModule);
  }

  public  getModule(id : number):Observable<Module>{
    return this.http.get<Module>(`${environment.apiModule}/${id}`);
  }

  public  GetModulesByFiliere(id: number):Observable<Array<Module>>{
    return this.http.get<Array<Module>>(`${environment.apiModule}/getModuleByFiliere/${id}`);
  }

  public deleteModule(id : number) : Observable<any> {
    return this.http.delete(`${environment.apiModule}/${id}`);

  }

  updateModule(module : Module) : Observable<Module>{
    let host = environment.apiModule;
    return this.http.put<Module>(host+"/"+module.id,module);
  }

}


