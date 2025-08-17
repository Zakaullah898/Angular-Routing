import { CanDeactivate, CanDeactivateFn, Router } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { inject } from "@angular/core";
import { Observable, retry } from "rxjs";
import { CourseService } from "./services/course.service";

export interface IDeactivateComponent{
canExit : ()=> boolean | Observable<boolean> | Promise<boolean>
}

export const canActivate =()=>{
  const authservice : AuthService = inject(AuthService);
  const route : Router = inject(Router)

  if(authservice.isAuthenticated()){
      return true
    }
    else{
      route.navigate(['login'])
      return false
    }
}

export const canActivateChild =()=>{
    return canActivate();
}

export const canDeactivate : CanDeactivateFn<IDeactivateComponent> =(comp : IDeactivateComponent)=>{
 if(comp.canExit()){
  return true
 }else{
  return false
 }
}
export const resolve =()=>{
  let courseService : CourseService = inject(CourseService);
    return courseService.getAllcourses();
}