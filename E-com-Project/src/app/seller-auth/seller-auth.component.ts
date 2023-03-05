import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISignUp } from 'src/data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private sellerService: SellerService, private router: Router){

  }

  signUp(data: ISignUp): void{
    console.warn(data);
    this.sellerService.userSignUp(data).subscribe((result)=>{
      console.log(result);
      if(result){
        this.router.navigate(['seller-home']);
      }
    });
  }
}
