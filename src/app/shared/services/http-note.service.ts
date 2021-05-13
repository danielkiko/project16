import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { Note } from 'src/app/shared/interfaces/note.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpNoteService {
routeAddress:'http://localhost:3000/Notes';
  constructor(private http: HttpClient) { }

  getNotes():Promise<any> {
    
    return this.http.get('http://localhost:3000/Notes').toPromise();
    
  }
  postNote(data: Note) {
    return this.http.post('http://localhost:3000/Notes', data).toPromise();
  }
}
