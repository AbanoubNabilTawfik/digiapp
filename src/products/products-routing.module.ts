import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesProductsComponent } from './categories-products/categories-products.component';
import { ProductsComponent } from './products/products.component';
import { AddUpdateProductComponent } from './add-update-product/add-update-product.component';
import { ProductItemsComponent } from './product-items/product-items.component';

const routes: Routes = [
  {path:'products',component:CategoriesProductsComponent},
  {path:'home',component:ProductsComponent},
  {path:'add-update' ,component:AddUpdateProductComponent},
  {path:'products-items/:category',component:ProductItemsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
