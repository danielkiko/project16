import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Note } from 'src/app/shared/interfaces/note.interface';


@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  NoteForm: FormGroup;
  @Output() noteAdd = new EventEmitter<Note>();
  notetitle: string;
  maintext: string;
  idnumber = 1;
  

  constructor() { }
  onAddNote() {
    this.noteAdd.emit({ name: this.notetitle, maintext: this.maintext, date: new Date() });
    this.notetitle = '';
    this.maintext = '';
  }
  ngOnInit(): void {
    this.NoteForm = new FormGroup({
      notetitle: new FormControl(null, [Validators.required]),
      maintext: new FormControl(null, [Validators.required]),
    });
  }

}
