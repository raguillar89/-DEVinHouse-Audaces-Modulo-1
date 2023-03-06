import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MovieComponent } from './components/movie/movie.component';
import { SerieComponent } from './components/serie/serie.component';
import { FullScreenComponent } from './layout/full-screen/full-screen.component';
import { AuthguardGuard } from './security/guard/authguard.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: FullScreenComponent, canActivate: [AuthguardGuard], children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'series', component: SerieComponent },
    { path: 'movies', component: MovieComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
