import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  typearr: Type[];
  NoteForm!: FormGroup;
  TypeForm!: FormGroup;
  @Output() noteAdd = new EventEmitter<Note>();
  @Output() typeAdd = new EventEmitter<Type>();
  @Output() typedelete = new EventEmitter<number>();

  type: Type;
  status = false;
  typecontainer: Type;
  linkedtype!: Type;
  typename: string;
  id?: number | null = null;
  note: Note;


  constructor(
    private fb: FormBuilder,
    private httpNoteservice: HttpNoteService,
    private router: Router,
    private activatedRoute: ActivatedRoute,) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id ? +params.id : null;
      this.getdata();
    })

  }
  async onAddNote() {
    if (this.id) {
      this.NoteForm.controls['editdate'].setValue(new Date);
      let typeid = this.TypeForm.controls['name'].value;
      console.log(typeof(typeid));
      this.NoteForm.controls['type'].setValue(typeid);
      const note: Note = this.NoteForm.value;
      console.log(note);
      try {
        await this.httpNoteservice.updateNote(this.id, note);
        await this.getdata();
      } catch (err) {
        console.log(err);
        return;
      }
    } else {
      this.NoteForm.controls['date'].setValue(new Date);
      let typeid = this.TypeForm.controls['name'].value;
      this.NoteForm.controls['type'].setValue(typeid);
      const note: Note = this.NoteForm.value;
      try {
        const noteResult = await this.httpNoteservice.postNote(note);
        this.router.navigate([this.router.url, noteResult.id]);
      } catch (err) {
        console.log(err);
      }
    }


  }
  async getdata() {
    const controls = {
      name: [null, [Validators.required, Validators.maxLength(100)]],
      maintext: [null, [Validators.required, Validators.maxLength(100)]],
      date: new Date,
      editdate: new Date,
      type: [null, [Validators.required, Validators.maxLength(100)]]
    }
    const typecontrols = {
      name: [null, [Validators.required, Validators.maxLength(100)]]
    }
    this.TypeForm = this.fb.group(typecontrols);
    this.NoteForm = this.fb.group(controls);
    if (this.id) {
      try {
        this.note = await this.httpNoteservice.getNote(this.id);
        this.TypeForm.controls['name'].setValue(this.note.type);
      } catch (error) {
        console.log(error);
      }
      this.NoteForm.patchValue(this.note);
    } else {
      this.NoteForm.reset();
    }

    try {
      this.typearr = await this.httpNoteservice.getTypes();
    } catch (error) {
      console.log(error);
    }


  }

  async delete() {
    try {
      await this.httpNoteservice.deleteNote(this.id);
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
      return;
    }
  }
  
}
