import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Articulo1Component } from './pages/articulo1/articulo1.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },

    { path: 'articulo1-component', component: Articulo1Component }
];
