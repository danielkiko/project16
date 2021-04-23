import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/shared/interfaces/note.interface';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  @Output() noteAdd = new EventEmitter<Note>();
  notetitle: string;
  maintext: string;
  idnumber = 1;

  constructor() { }
  onAddNote() {
    this.noteAdd.emit({ id: this.idnumber++, name: this.notetitle, maintext: this.maintext, date: new Date() });
    this.notetitle = '';
    this.maintext = '';
  }
  ngOnInit(): void {
  }

}
