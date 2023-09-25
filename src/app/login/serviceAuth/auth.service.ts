import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import jwtDecode from "jwt-decode";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   isAuthenticated : boolean =false;
   roles : any;
   username : any;
  accessToken! : string;
  constructor(private http : HttpClient,private router:Router) { }
  public login(username : string ,password :string){
    let  options ={
      headers : new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
    }
    let params =new HttpParams()
      .set("username",username)
      .set("password",password)
      .set("grantType","password")
      .set("refreshToken","")
      .set("withRefreshToken",false)
      return this.http.post(environment.apiAuth,params,options);
  }
  loadProfile(data: any) {
    this.accessToken=data['accessToken'];
    this.isAuthenticated=true;
    let decodeJwt : any= jwtDecode(this.accessToken);
    this.username=decodeJwt.sub;
    this.roles=decodeJwt.scope;
    environment.profileName=this.username;
    environment.isAuthenticated=true;
    this.router.navigateByUrl("/");

  }
}
