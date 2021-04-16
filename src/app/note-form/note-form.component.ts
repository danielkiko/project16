import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../shared/interfaces/note.interface';

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

  ngOnInit(): void {
  }
  onAddNote() {
    this.noteAdd.emit({ id: this.idnumber++, name: this.notetitle, maintext: this.maintext, date: new Date() });
    this.notetitle = '';
    this.maintext = '';

  }

}
