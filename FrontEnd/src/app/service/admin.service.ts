import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';
import { CuisineAdmin } from '../model/cuisine-admin';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(
    private http : HttpClient ,
    private toast : NgToastService) { }

  getHeader(token : string) {
      return  new HttpHeaders().set('Authorization','Bearer '+token);
    }

    addRestaurants(data : any) {

      return this.http.post('http://localhost:9000/foodieApp/restaurant/addRestaurant',data);
    //   const restaurantUrl = 'http://localhost:9000/foodieApp/restaurant/addRestaurant';
    // if(window.localStorage.getItem('tokenKey') == null) {
    //   this.toast.warning({detail:'please login to add Restaurants',duration:2000});
    // }
    // else {
    //   this.http.post<any>(restaurantUrl, data, { headers: this.getHeader(window.localStorage.getItem('tokenKey')) })
    //     .subscribe(res => {
    //       this.toast.success({ detail: 'Added Restaurant.. ', duration: 2000 });
    //     },
    //       error => {
    //         if (error.status == 409) {
    //           this.toast.warning({ detail: 'Restaurant is already added..', duration: 3000 });
    //         }
    //         else {
    //           this.toast.error({ detail: 'Something went wrong please try after some time', duration: 3000 });
    //         }
    //       })}
  }

  deleteRestaurant(restaurantId:any){
    return this.http.delete('http://localhost:8081/foodieApp/restaurant/deleteRestaurant/'+restaurantId);
  }

  deleteCuisine(restaurantId:any,cuisineName:any){
    return this.http.delete('http://localhost:8081/foodieApp/restaurant/deleteItem/'+restaurantId+'/'+cuisineName,{responseType:"text"});
  }

  addCuisine(restaurantId:any , cuisine:CuisineAdmin){
    return this.http.put('http://localhost:9000/foodieApp/restaurant/updateRestaurantbyId/'+restaurantId,cuisine,{responseType:"text"});
  }

  getCuisine(restaurantId:any){
    
    return this.http.get('http://localhost:9000/foodieApp/restaurant/getCuisines/'+restaurantId+'/')
  }
}
