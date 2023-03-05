import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SellerAuthComponent } from "./seller-auth/seller-auth.component";
import { SellerHomeComponent } from "./seller-home/seller-home.component";


const appRoute : Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "seller-auth",
        component: SellerAuthComponent
    }, 
    {
        path: "seller-home",
        component: SellerHomeComponent
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}