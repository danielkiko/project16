import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { NoteCardComponent } from './note-card/note-card.component';



@NgModule({
  declarations: [
    AppComponent,
    NoteFormComponent,
    NoteCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
