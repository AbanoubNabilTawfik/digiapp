import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/core/Services/auth-guard.service';
import { NotFoundComponent } from 'src/errors/not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'main/home',pathMatch:'full'},
  {path:'main',loadChildren: () => import('../shared/shared.module').then(m => m.SharedModule)},
  {path:'auth',loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule) },
  {path:'categories',canActivate:[AuthGuardService], loadChildren: () => import('../products/products.module').then(m => m.ProductsModule) },
  {path:'**',component:NotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
