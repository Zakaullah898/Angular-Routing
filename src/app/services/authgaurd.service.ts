import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, MaybeAsync, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ContactComponent } from '../contact/contact.component';
import { Course } from '../models/course';
import { CourseService } from './course.service';

export interface IDeactivateComponent{
canExit : ()=> boolean | Observable<boolean> | Promise<boolean>
}
@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService implements CanActivate,CanActivateChild, CanDeactivate<IDeactivateComponent>, Resolve<Course[]>{
  authservice : AuthService = inject(AuthService);
  courseService : CourseService = inject(CourseService);
  route : Router = inject(Router)

  constructor() { }
  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot): boolean|Observable<boolean>|Promise<boolean>{
    if(this.authservice.isAuthenticated()){
      return true
    }
    else{
      this.route.navigate(['login'])
      return false
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.canActivate(childRoute,state)
  }
  
  canDeactivate(component : IDeactivateComponent , currentRoute : ActivatedRouteSnapshot,
    currentState :RouterStateSnapshot, nextState : RouterStateSnapshot){
      if(component.canExit()){
        return true
      }
      else{
        return false
      }
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course[] |Observable<Course[]> | Promise<Course[]> {
    return this.courseService.getAllcourses();
  }
}
