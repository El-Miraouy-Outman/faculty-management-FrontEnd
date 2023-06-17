import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { StudentServicesService } from '../../Services/student-services.service';
import { Student1 } from '../../Models/student1';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student1[] =[];
  constructor(private studentService:StudentServicesService ){}
  ngOnInit(): void {
    this.getStudents();
  }
  private getStudents(){
    this.studentService.getStudentsList().subscribe(data=>{
      this.students=data;
    });
  }

  studentUpdated = {
    nom:"",
    prenom:"",
    email:"",
    adresse:"",
    phone:"",
    cin:"",
    cne:"",
    apogee:"",
    lieuNaissance:"",
  }
  updateStudent(): void {
    this.studentService.updateStudent(this.studentUpdated.apogee ,this.studentUpdated).subscribe({
      next: () => {
        this.getStudents();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  edit( student: any) {
    this.studentUpdated = student;
  }

  deleteStudent(apogee: number): void {
    this.studentService.deleteStudent(apogee).subscribe({
      next: () => {
        this.getStudents();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
