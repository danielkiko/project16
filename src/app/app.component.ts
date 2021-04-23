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

  onAddNote(e: Note ) {
    this.notes.push(e);
  }
  delete(index:number) {
    this.notes.splice(index,1);
  }
}
