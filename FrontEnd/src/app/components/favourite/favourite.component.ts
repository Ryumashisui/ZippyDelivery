import { Component, OnInit } from '@angular/core';
import { FavouriteService } from './../../service/favourite.service';
import { NgToastService } from 'ng-angular-popup';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { Router } from '@angular/router';
import { ShareInformationService } from 'src/app/service/share-information.service';
import { FavouriteCuisine } from 'src/app/model/favourite-cuisine';
import { RestaurantInfoComponent } from '../restaurant-info/restaurant-info.component';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  restauratantInfo : any; 

  totalRecordsForRestaurant : string;
  totalRecordsForCuisne : string;
  page : number = 1;

 public favRestaurantList : any;
 public favCuisinesList : any;
 public allCuisines:any


 restaurantLength : number;
 cuisineLength : number;

 beforeLogin : boolean;
 afterLogin : boolean;

  constructor(private router: Router,  private restaurantService:RestaurantService,private restaurantInfo:RestaurantInfoComponent, private shareInformation: ShareInformationService,

    private favouriteService : FavouriteService ,
    private taost : NgToastService) { }

  ngOnInit(): void {

    this.addCuisine()
    

    console.log(window.localStorage.getItem('tokenKey'))
    if(window.localStorage.getItem('tokenKey') == null) {
      this.beforeLogin = true;
    } else {
      this.afterLogin = true;
        this.favouriteService.getFavRestaurant().subscribe(res =>{
        this.favRestaurantList = res;
        this.totalRecordsForRestaurant = res.length;
        this.restaurantLength = this.favRestaurantList.length;
      })
      //this.getFavCuisine();
      
    }
  }

  // getFavCuisine() {
  //   this.favouriteService.getFavCuisine().subscribe(res => {
  //     this.favCuisinesList = res;
  //     this.totalRecordsForCuisne = res.length;
  //     this.cuisineLength = this.favCuisinesList.length;
  //     console.log(this.cuisineLength)
  //   })
  // }

  addCuisine(){
    this.restaurantService.getAllCuisines().subscribe(
      res=>{
        this.restaurantInfo=res;
      
      }
    )
  }

  deleteFavRestaurant(id:any) {
    this.favouriteService.removeFavRestaurant(id);
     window.location.reload();
  }

  // deleteFavCuisine(id: any) {
  //   this.favouriteService.removeFavCuisine(id);
  //   window.location.reload();
  // }

  getData(item: any) {
    this.shareInformation.setData(item);
    this.router.navigate(['/restaurantInfo']);
  }

 
  foodieCuisines() {
    this.restaurantService.getAllCuisines()
      .subscribe(res => {
        this.allCuisines = res;
      },
        error => {
          console.log(error);
        })
  }

  public favourites: FavouriteCuisine[];
  addFavCuisine(data: any) {
    const id = Math.floor((Math.random() * 10000) + 1);
    this.favourites = [
      new FavouriteCuisine(
        data.cuisineId = id,
        data.cuisineName,
        data.cuisineImage,
        window.localStorage.getItem('userEmail'),
        data.price)]
    console.log(this.favourites);
    this.favouriteService.addCuisinesToCart(this.favourites[0]);
  }
 
}


