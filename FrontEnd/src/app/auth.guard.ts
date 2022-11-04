import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupLoginService } from './service/signup-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

   constructor( private connector :SignupLoginService, private route:Router){
    
   }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return  this.isUserLogin();
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  isUserLogin(){
    if(this.connector.islogin == true){
      return this.connector.islogin;
    }
    else{
      return this.route.navigate(['/login']);
    }
  }








}
