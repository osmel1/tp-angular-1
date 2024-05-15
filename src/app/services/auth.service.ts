import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppStateService} from "./app-state.service";
import {firstValueFrom} from "rxjs";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient , private appState : AppStateService) { }
  async login(username: string , password:string){
    let user:any = await firstValueFrom(this.http.get("http://localhost:3000/users/"+username));
    if(password == atob(user.password)){
      let decodedJwt:any = jwtDecode(user.token);
      console.log("decode jwt")
      console.log(decodedJwt);
      this.appState.setAuthState({
        isAuthenticated : true ,
        username : decodedJwt.sub,
        roles: decodedJwt.roles,
        token : user.token
      });
      return Promise.resolve
    }else{
      return Promise.reject("Bad credentiels");
    }
  }
}
