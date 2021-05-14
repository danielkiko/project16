import { getMissingNgModuleMetadataErrorData } from '@angular/compiler';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from './shared/interfaces/note.interface';
import { HttpNoteService } from './shared/services/http-note.service';
import { NoteCardServiceService } from './shared/services/note-card-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';
  notes: Note[];
  Notebody: Note;
  constructor(private NoteCardService: NoteCardServiceService,
    private httpNoteService: HttpNoteService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.notes = this.NoteCardService.notes;
    this.getData();
  }


   async onAddNote(e: Note) {
    this.NoteCardService.notes.push(e);
    this.notes = this.NoteCardService.notes;
    console.log(this.NoteCardService.notes);
    try {
      await this.httpNoteService.postNote(this.NoteCardService.notes[this.notes.length-1]);
    } catch (err) {
      console.log(err);
    }
    console.log(this.getData());
    
  }

  async onDeleteNote(index: number) {
    this.NoteCardService.notes.splice(index, 1);
    try {
      await this.httpNoteService.deleteNote(this.notes[index].id);
    } catch (err) {
      console.log(err);
    }
    this.getData();
  }
  async onEditNote(index: number) {
    console.log(this.NoteCardService.notes);
    this.Notebody = this.notes[index];
    try {
      await this.httpNoteService.updateNote(this.notes[index].id, this.Notebody);
    } catch (err) {
      console.log(err);
    }
  }

  async getData() {
    try {
      this.notes = await this.httpNoteService.getNotes()
    } catch (err) {
      console.log(err);
    }
  }
}

