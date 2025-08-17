import { Component, inject, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,CoursesComponent,FooterComponent,HomeComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular-router';
  isLoading : boolean = false;
  route : Router = inject(Router)
  ngOnInit(): void {
    this.route.events.subscribe((routerEvent)=>{
      if(routerEvent instanceof NavigationStart){
        this.isLoading = true
      }
      else if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel){
        this.isLoading = false
      }
    })
  }
}
