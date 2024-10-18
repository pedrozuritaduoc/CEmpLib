import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FotherComponent } from './fother/fother.component';
import { HomeComponent } from './pages/home/home.component';

import { Articulo1Component } from './pages/articulo1/articulo1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent, FotherComponent, NavBarComponent, 
    HeaderComponent, RouterOutlet,
    Articulo1Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'empLib';
}
