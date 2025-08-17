import { Component, inject, OnInit } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PopularComponent } from './popular/popular.component';
import { ServicesComponent } from './services/services.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent,ContactUsComponent,PopularComponent,ServicesComponent,TestimonyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
activeRoute : ActivatedRoute =inject(ActivatedRoute)
ngOnInit(): void {
  this.activeRoute.fragment.subscribe((data)=>{
    this.goToSection(data)
  })
}
goToSection(section){
  document.getElementById(section).scrollIntoView({behavior: 'smooth'})
}
}
