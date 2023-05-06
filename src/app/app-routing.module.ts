import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListenotesComponent} from "./component/notes/listenotes/listenotes.component";

const routes: Routes = [
  {path: "notes",component :ListenotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
