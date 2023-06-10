import {Module} from "./module.model";

export interface Filiere {
  id:number
  name: string
  diplomat : string;
  modules:Module[]
}
