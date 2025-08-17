import { AfterViewChecked, AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit{
  selectedCourse : Course;
  courseId : number;
  isIdAvailable : boolean = true;
  courseServis : CourseService = inject(CourseService)
  activeRoute : ActivatedRoute = inject(ActivatedRoute)
  route : Router = inject(Router)

  ngOnInit(): void {
    // this.courseId = this.activeRoute.snapshot.params['id']
    // this.courseId = +this.activeRoute.snapshot.paramMap.get('id')
    this.activeRoute.paramMap.subscribe((data)=>{
         this.courseId = +data.get('id')
         this.selectedCourse= this.courseServis.courses.find(course => course.id ===this.courseId)
         if(this.selectedCourse.id < this.courseServis.courses.length){
          this.isIdAvailable = true
         }
         else{
          this.isIdAvailable = false
         }
    })
   
    
  }

  goToPrePage(id :number){
    this.route.navigate(['/courses/course/',id - 1])
  }
  goToNextPage(id :number){
    this.route.navigate(['/courses/course/',id + 1], {relativeTo: this.activeRoute})

      }

}
