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
  notes: Note[]=[];

  onAddNote(e: Note ) {
    this.notes.push(e);
    console.log(this.notes);
  }

  onDeleteNote(index:number) {
    this.notes.splice(index,1);
  }
  onEditNote() {
    
  }
}
