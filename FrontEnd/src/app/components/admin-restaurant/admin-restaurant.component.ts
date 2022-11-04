import { Component, OnInit } from '@angular/core';
import { ShareInformationService } from '../../service/share-information.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from './../../service/admin.service';
import { CuisineAdmin } from 'src/app/model/cuisine-admin';

@Component({
  selector: 'app-admin-restaurant',
  templateUrl: './admin-restaurant.component.html',
  styleUrls: ['./admin-restaurant.component.css']
})
export class AdminRestaurantComponent implements OnInit {

  restauratantInfo: any;
  cuisineForm: FormGroup;

  cuisine: CuisineAdmin;

  constructor(
    private shareRestautant: ShareInformationService,
    private router: Router,
    private toast: NgToastService,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.restauratantInfo = this.shareRestautant.getData();
    this.cuisineForm=new FormGroup({
  
      cusineName : new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
      // location : new FormControl('',Validators.required),
      cuisineImage : new FormControl('',Validators.required),
     price: new FormControl('',Validators.required)
    })
    console.log(this.restauratantInfo);
    if(!this.restauratantInfo)  this.router.navigate(['/adminRestaurant']);

    this.cuisineForm = new FormGroup({
      cuisineName: new FormControl('', Validators.required),
      cuisineImage: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
  }


  // removeCuisine(restaurantId: any, cuisineName: any)
  // {this.adminService.deleteCuisine(restaurantId,cuisineName).subscribe(
  //   data=>{
  //     console.log(data);
  //     this.restauratantInfo.cuisine.delete(this.cuisineForm.value)
  //     this.toast.success({detail:'Food Item Deleted Successfully',duration:4000});
  //     this.router.navigate(['/admin']);
  //   }
  // );
  // }
  
  // removeCuisine(restaurantId: any, cuisineName: any) {
  //   console.log(this.cuisineForm.value)
  //   this.adminService.deleteCuisine(restaurantId, cuisineName) .subscribe(
  //       (data: any) => {
  //         console.log(data);
  //         this.restauratantInfo.cuisine.delete(this.cuisineForm.value)

         
  //         this.toast.success({ detail: 'Food Item Deleted Successfully', duration: 2000 });
         
  //         // this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //           this.router.navigate(['/adminRestaurant']);


  //         // });

          
        
  //       }

        
  //     );
  

  // }

  removeCuisine(restaurantId:any,cuisineName:any){
    this.adminService.deleteCuisine(restaurantId,cuisineName).subscribe(
    (data:any)=>{
      console.log(data);
  
     this.restauratantInfo.cuisine=  this.restauratantInfo.cuisine.filter((a:any)=>a.cuisineName!=cuisineName)
      this.toast.success({ detail: 'Food Item Deleted Successfully', duration: 5000 });
     
    

  
    }


  )
 
 
}

isCuisinePresent:Boolean=false

  addCuisine(restaurantId: any) {
    console.log("************************************************");
       console.log(restaurantId);
        
    this.adminService.getCuisine(restaurantId).subscribe(
      (data:any)=>{
        console.log(data);
        console.log(data.cuisineName);
        console.log(this.cuisineForm.value.cuisineName);
        for(let value of data){
          if(value.cuisineName==this.cuisineForm.value.cuisineName){
            // alert('Cuisine already Exist')
           this.isCuisinePresent=true
          }
        }
        
        if(this.isCuisinePresent){
          alert('Cuisine already Exist')
          this.isCuisinePresent=false
        }
        else
        {
          this.adminService.addCuisine(restaurantId, this.cuisineForm.value).subscribe(
            (data: any) => {
             
              console.log(data);
              this.restauratantInfo.cuisine.push(this.cuisineForm.value)
              this.toast.success({ detail: 'Food Item Added Successfully', duration: 5000 });
              this.isCuisinePresent=false
              this.router.navigate(['/adminRestaurant']);
            }
      
            
          );
        }
        
      },
      (err:any)=>{
        console.log(err);
        
      }
      
    )
    console.log(this.cuisineForm.value);
   
  }

}
