import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { InformationComponent } from './shared/components/information/information.component';
import { NoteLayoutComponent } from './shared/components/note-layout/note-layout.component';
import { TypeFormComponent } from './type-form/type-form.component';
import { TypeListComponent } from './type-list/type-list.component';


const routes: Routes = [
  {
    path:'',
    component: NoteLayoutComponent,
    children: [
      {
        path:'', 
        component: NoteCardComponent,
      },
      {
        path:'note/:id', 
        component:NoteFormComponent,
      },
      {
        path:'note', 
        component:NoteFormComponent,
      },
      {
        path:'types', 
        component:TypeListComponent,
      },
      {
        path:'types/type', 
        component:TypeFormComponent,
      },
      {
        path:'types/type/:id', 
        component:TypeFormComponent,
      },
      {
        path:'info',
        component:InformationComponent,
      },
      {
        path:'contact',
        component:ContactComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }