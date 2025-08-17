import { Component, ElementRef, inject, OnInit, ViewChild,  } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
@ViewChild('userName') userName : ElementRef;
@ViewChild('password') password : ElementRef;
authservice : AuthService = inject(AuthService);
route : Router = inject(Router);
activateRoute : ActivatedRoute = inject(ActivatedRoute)
ngOnInit(): void {
  this.activateRoute.queryParamMap.subscribe((data)=>{
    const logout = Boolean(data.get('logout'))
    if(logout){
      this.authservice.loggOut();
      alert('You are now log out. logout = '+ this.authservice.isLogged)
    }
  })
}
onLoggin(){
  const userName = this.userName.nativeElement.value;
  const password = this.password.nativeElement.value;

 const user = this.authservice.login(userName,password)
 if(user == undefined){
  alert('Login credential you have entered is not correct')
 }
 else{
  alert(`Welcom ${user.name} you have successfully login`)
  this.route.navigate(['/courses'])
 }
}
}
