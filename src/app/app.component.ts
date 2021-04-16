import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from './shared/interfaces/note.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';
  notetitle = '';
  maintext = '';
  notes: Note[]=[];
  idnumber = 1;

  submit() {
    let note: Note = { id: this.idnumber++, name: this.notetitle, maintext: this.maintext, date: new Date() }
    this.notes.push(note);
    console.log(this.notes);
    // console.log(this.notetitle);
    // console.log(this.maintext);
    // this.notetitle ='';
    // this.maintext ='';
    // console.log(this.date.getMonth()+1);
    // console.log(this.date.getDate());
    // console.log(this.date.getHours());
    // console.log(this.date.getMinutes());
  }
  delete(index:number) {
    this.notes.splice(index,1);
  }
}
