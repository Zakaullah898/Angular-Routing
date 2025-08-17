import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthgaurdService } from './services/authgaurd.service';
import { canActivate, canActivateChild, canDeactivate, resolve } from './auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent,
        canDeactivate : [canDeactivate]
    },
    {
        path: 'courses',
        component: CoursesComponent,
        resolve :{courses : resolve}
    },
    {
        path: 'courses',
        canActivateChild : [canActivateChild],
        children: [
       {
         path: 'course/:id',  // ✅ Correct
         component: CourseDetailComponent
       },
       {path: 'checkout',
        component : CheckoutComponent,
        
       }
       ]
    },

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    },
];
