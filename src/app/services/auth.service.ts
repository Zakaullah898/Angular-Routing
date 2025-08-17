import { inject, Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged : Boolean = false
  userService : UserService = inject(UserService)
  constructor() { }
  login(userName : string, password : string){
      let user = this.userService.users.find(u=> u.username == userName && u.password == password);
      if(user === undefined){
        this.isLogged = false;
      }
      else{
        this.isLogged = true;
      }
    
      return user;
  }
  loggOut(){
    this.isLogged = false
  }

  isAuthenticated(){
    return this.isLogged;
  }
}
