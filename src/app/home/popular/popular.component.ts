import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent implements OnInit{
  popularCourses :Course[]= [];
  courseService = inject(CourseService)
  router : Router = inject(Router)
  activatedRoute : ActivatedRoute = inject(ActivatedRoute)
ngOnInit(): void {
  this.popularCourses =this.courseService.courses.filter(c => c.rating >= 4.5)
}

navigateToCourses(){
  this.router.navigate(['courses'])
  // this.router.navigate(['courses'],{relativeTo: this.activatedRoute})
}
}
