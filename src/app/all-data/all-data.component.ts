import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css']
})
export class AllDataComponent {
      integerData:number=21;
      stringData:string="Dhruvi Kakadiya";
      curDate:Date=new Date('2023-10-20');
      arrayList:string[]=["First","Second","Third","Fourth"];
      form:FormGroup;

      constructor() {
        this.form = new FormGroup({
          inputType: new FormControl('textbox'), // Default to textbox
          textValue: new FormControl('') // Initial value is an empty string
        });
      }
}
