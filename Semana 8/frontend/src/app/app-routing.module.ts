import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarwarsDeleteComponent } from './components/starwars-delete/starwars-delete.component';
import { StarwarsUpdateComponent } from './components/starwars-update/starwars-update.component';
import { StarwarsComponent } from './components/starwars/starwars.component';

const routes: Routes = [
  {
    path: '', component: StarwarsComponent,
  },
  {
    path: 'update/:id', component: StarwarsUpdateComponent,
  },
  {
    path: 'delete/:id', component: StarwarsDeleteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
