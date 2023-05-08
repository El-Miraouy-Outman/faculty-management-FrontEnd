import {Module} from "./module.model";

export interface Filiere {
  id:number
  name: string
  modules:Module[]
}
