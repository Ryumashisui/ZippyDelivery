import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SignupLoginService {

  tokenKey:any
  islogin: boolean = false;

  constructor(private http : HttpClient) { }

  userSignup(data:any) {
    const signupUrl = 'http://localhost:9000/foodieApp/user/register';
    return this.http.post<any>(signupUrl,data);
  }

  userLogin(data:any) {
    const loginUrl = 'http://localhost:9000/foodieApp/user/login';
    return this.http.post<any>(loginUrl,data);
  }

   login(){
     let token=this.tokenKey;
     if(token===null||token===undefined){
      return false

     }
     else{

      return true

     }
   }

  

  setToken(token:any){
     sessionStorage.setItem('token',token)
     this.tokenKey=token;
     return true;

  }
  getToken():string|null{
    return sessionStorage.getItem('token')
    
  }
}
