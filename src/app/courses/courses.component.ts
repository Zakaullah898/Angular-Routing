import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{
  courseService = inject(CourseService)
  router : Router = inject(Router);
  AllCourses : Course[];
  searchString: string;
  activateRoute : ActivatedRoute = inject(ActivatedRoute)
  isSubmited : boolean = false;
ngOnInit(): void {


this.activateRoute.queryParamMap.subscribe(data=>{
  this.searchString = data.get("search")
  
  if(this.searchString === undefined || this.searchString === null || this.searchString ===''){
            // this.courseService.getAllcourses().subscribe((data)=>{
            //   this.AllCourses = data;
            // })
            this.AllCourses = this.activateRoute.snapshot.data['courses']
  }else{
    this.AllCourses = this.courseService.courses.filter(x=>x.title.toLowerCase().includes(this.searchString.toLowerCase()))
    console.log(this.AllCourses)
  }
})

}
goToDetail(courseId : number){
// this.router.navigateByUrl("course/" + courseId)
this.router.navigate(['course', courseId ],{relativeTo : this.activateRoute})
}

}
