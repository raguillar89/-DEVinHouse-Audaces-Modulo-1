import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { FullScreenComponent } from './layout/full-screen/full-screen.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterMoviesPipe } from './filters/movies/filterMovies';
import { FilterSeriesPipe } from './filters/series/filterSeries';
import { NextDirective } from './directives/next.directive';
import { PrevDirective } from './directives/prev.directive';
import { SerieComponent } from './pages/serie/serie.component';
import { SerieCategoryComponent } from './components/categories/serieCategory/serieCategory.component';
import { MovieCategoryComponent } from './components/categories/movieCategory/movieCategory.component';
import { MovieComponent } from './pages/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SerieComponent,
    MenuComponent,
    LoginComponent,
    FullScreenComponent,
    HeaderComponent,
    FilterMoviesPipe,
    FilterSeriesPipe,
    NextDirective,
    PrevDirective,
    SerieCategoryComponent,
    MovieCategoryComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
