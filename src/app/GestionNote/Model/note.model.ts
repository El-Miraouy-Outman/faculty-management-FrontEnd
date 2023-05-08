import {Student} from "./student.model";
import {Module} from "./module.model";


export interface Note{
  note: number;
  student: Student;
  module: Module

};
