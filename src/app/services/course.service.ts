import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
   private description: string = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    "`;

    courses: Course[] = [
        { id: 1, title: 'Complete Modern JavaScript Course', price: 499,tax:49 ,desc: this.description, image: './course1.jpg', rating: 4.5, duration: 18.2, author: 'Steve smith'},
        { id: 2, title: 'A complete Angular Course', price: 599,tax:30, desc: this.description, image: './course2.jpg', rating: 4.9, duration: 20.8, author: 'Sarah King'},
        { id: 3, title: 'A Complete Node JS Bootcamp', price: 449,tax:39, desc: this.description, image: './course3.jpg', rating: 3.7, duration: 16.6, author: 'Mark Vought'},
        { id: 4, title: 'A Complete React Developer Course', price: 599,tax:59, desc: this.description, image: './course4.jpg', rating: 4.8, duration: 28.2, author: 'Sarah King'},
        { id: 5, title: 'ASP.NET Core with Web API', price: 649,tax:0, desc: this.description, image: './course5.jpg', rating: 3.5, duration: 34.4, author: 'Steve smith'},
        { id: 6, title: 'Froentend Development with Vue.js', price: 329,tax:25, desc: this.description, image: './course6.jpg', rating: 4.5, duration: 17.7, author: 'Steve smith'},
        { id: 7, title: 'A Complete Python Bootcamp', price: 469,tax:15, desc: this.description, image: './course7.jpg', rating: 3.4, duration: 32.6, author: 'Mark Vought'},
        { id: 8, title: 'Machine Learning with Python', price: 1299,tax:0, desc: this.description, image: './course8.jpg', rating: 4.8, duration: 26.7, author: 'Sarah King'},
    ]

    getAllcourses(){
        return new Observable<Course[]>((sub) => {
            setTimeout(() => {
                sub.next(this.courses);
            }, 5000)
        })
    }
}
