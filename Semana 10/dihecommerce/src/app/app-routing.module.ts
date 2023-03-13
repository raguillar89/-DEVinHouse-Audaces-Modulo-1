import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SecurityGuard } from './guard/security.guard';
import { FullScreenWithMenuComponent } from './layout/full-screen-with-menu/full-screen-with-menu.component';
import { FullScreenWithoutMenuComponent } from './layout/full-screen-without-menu/full-screen-without-menu.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductReadComponent } from './pages/product/product-read/product-read.component';
import { ProductCreateComponent } from './pages/product/product-create/product-create.component';

const routes: Routes = [
  { path:'', component: FullScreenWithoutMenuComponent, children: [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path:'login', component: LoginComponent },
  ]},
  { path: 'wm', component: FullScreenWithMenuComponent, canActivateChild:[SecurityGuard], children: [
    { path: 'wm', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    { path: 'product', component: ProductReadComponent },
    { path: 'product/create', component: ProductCreateComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
