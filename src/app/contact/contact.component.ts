import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IDeactivateComponent } from '../services/authgaurd.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements IDeactivateComponent{
  isSubmited : boolean = false;
  firstname : string = '';
  lastname : string = '';
  country: string = "usa";
  message : string = '';
  onSubmit(){
  this.isSubmited = true
 }  
  canExit(){
    if((this.firstname || this.lastname || this.message) && !this.isSubmited){
      return confirm("You have unsaved changes. Do you want to navigate")
    }
    else{
      return true
    }
  }
}
