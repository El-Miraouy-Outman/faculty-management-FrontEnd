import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListenotesComponent} from "./GestionNote/Components/listenotes/listenotes.component";
import {AddnoteComponent} from "./GestionNote/Components/addnote/addnote.component";
import {StudentsComponent} from "./GestionStudent/Components/students/students.component";
import {FilieresComponent} from "./GestionStudent/Components/filieres/filieres.component";
import {EditFiliereComponent} from "./GestionStudent/Components/filieres/edit-filiere/edit-filiere.component";


const routes: Routes = [
  {path: "notes",component :ListenotesComponent},
  {path: "addNote",component :AddnoteComponent},
  {path : "etudiants", component : StudentsComponent},
  {path : "filieres", component : FilieresComponent},
  {path : "editFiliere/:id" , component: EditFiliereComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
