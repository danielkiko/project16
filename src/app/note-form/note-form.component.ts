import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Note } from 'src/app/shared/interfaces/note.interface';
import { HttpNoteService } from 'src/app/shared/services/http-note.service';
import { AppComponent } from '../app.component';
import { Type } from '../shared/interfaces/type.interface';


@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  @Input() typearr:Type[];
  NoteForm!: FormGroup;
  TypeForm!: FormGroup;
  @Output() noteAdd = new EventEmitter<Note>();
  @Output() typeAdd = new EventEmitter<Type>();
  @Output() typedelete = new EventEmitter<number>();
  type: Type;
  status = false;
  typecontainer: Type;


  constructor(private fb: FormBuilder, private httpNoteService: HttpNoteService) { }
  onAddNote() {
    const note = this.NoteForm.value;
    const type = this.typecontainer;
    this.noteAdd.emit(note);
  }
  onEdittype() {
    this.status = !this.status;
  }
  onAddtype() {
    const type = this.TypeForm.value;
    this.typeAdd.emit(type);
    this.status = !this.status;
    console.log(this.typearr);
  }
  onDeletetype() {
    this.typedelete.emit(this.typecontainer.id);
    
  }
  ngOnInit(): void {
    const controls = {
      name: [null, [Validators.required, Validators.maxLength(100)]],
      maintext: [null, [Validators.required, Validators.maxLength(100)]],
      date: Date
    }
    const typecontrols = {
      typename: [null, [Validators.required, Validators.maxLength(100)]]
    }
    this.TypeForm = this.fb.group(typecontrols);
    this.NoteForm = this.fb.group(controls);

  }
}
