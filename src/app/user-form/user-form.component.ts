import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
      userForm:FormGroup;

      constructor(private formBuilder:FormBuilder){
        this.userForm=this.formBuilder.group({
          name:['',Validators.required],
          age:['',Validators.required],
          email:['',[Validators.required,Validators.email]],
          course:['',Validators.required]
        })
      }

      onSubmit(){
        if(this.userForm.valid){
          const userData=this.userForm.value;
          console.log("Name : "+userData.name);
          console.log("Age : "+userData.age)
          console.log("Email : "+userData.email)
          console.log("Course : "+userData.course)
        }else {
          console.log('Form is invalid. Please check the inputs.');
        }
      }
}
