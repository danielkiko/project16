import { Injectable } from '@angular/core';
import { Note } from 'src/app/shared/interfaces/note.interface';
@Injectable({
  providedIn: 'root'
})
export class NoteCardServiceService {
  notes: Note[]=[];
  constructor() { }
  
  

  
}
