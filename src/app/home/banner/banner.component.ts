import { Component, inject } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
route : Router = inject(Router)
  onSearchQuerry(value : string){
      console.log(value)
      this.route.navigate(['/courses'],{queryParams : {search : value}})
  }
}
