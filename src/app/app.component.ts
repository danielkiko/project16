import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';
  notetitle ='';
  maintext ='';
  date = new Date;

  submit(){
    console.log(this.notetitle);
    console.log(this.maintext);
    this.notetitle ='';
    this.maintext ='';
    console.log(this.date.getMonth()+1);
    console.log(this.date.getDate());
    console.log(this.date.getHours());
    console.log(this.date.getMinutes());
}
}
