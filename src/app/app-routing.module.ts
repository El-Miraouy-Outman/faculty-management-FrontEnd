import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
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
=======
import { InscriptionStudentsComponent } from './GestionInscription/Components/inscription-students/inscription-students.component';
import { InscriptionComponent } from './GestionInscription/Components/inscription/inscription.component';
import { ListeinscriptionComponent } from './GestionInscription/Components/listeinscription/listeinscription.component';
import { AddnoteComponent } from "./GestionNote/Components/addnote/addnote.component";
import { ListenotesComponent } from "./GestionNote/Components/listenotes/listenotes.component";
import { StudentsComponent } from "./GestionStudent/Components/students/students.component";


const routes: Routes = [
  {path: "notes",component :ListenotesComponent
    /*, canActivate : [AuthGuard],data : {
      roles :['USER','ADMIN']
    }*/
  },
  {path: "addNote",component :AddnoteComponent
   /* , canActivate : [AuthGuard],data : {
      roles :['ADMIN','USER']
    }*/
  },
  {path : "etudiants", component : StudentsComponent},
  {path: "inscription",component : InscriptionComponent},
  {path: "listeinscription", component: ListeinscriptionComponent},
  {path: "inscription-students", component: InscriptionStudentsComponent}
>>>>>>> 7cbafb65d0e215c621a1f117c26d0a5ed6d37386
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
