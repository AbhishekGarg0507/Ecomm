import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},

  {path:'seller-auth' , component:SellerAuthComponent,
    
  },
  {path:'seller-home' , component:SellerHomeComponent,
    canActivate:[AuthGuardGuard]
  },
  {path:'seller-add-product' , component:SellerAddProductComponent,
    canActivate:[AuthGuardGuard]
  },
  {path:'seller-update-product/:id' , component:SellerUpdateProductComponent,
    canActivate:[AuthGuardGuard]
  },
  {component:SearchComponent, path:'search/:query',
  },
  {
    component:ProductDetailsComponent,path:'details/:productId',
  },
  {
    component:UserAuthComponent,path:'user-auth',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
