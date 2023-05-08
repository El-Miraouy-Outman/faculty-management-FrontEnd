import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Module} from "../../Model/module.model";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http:HttpClient) { }
  public  GetModules():Observable<Array<Module>>{
    return this.http.get<Array<Module>>(environment.apiModule);
  }
}


