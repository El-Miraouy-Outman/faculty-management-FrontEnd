import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student1 } from '../Models/student1';
@Injectable({
  providedIn: 'root'
})
export class StudentServicesService {




  constructor(private httpClient: HttpClient) { }
  getStudentsList():Observable<Student1[]>{
    return this.httpClient.get<Student1[]>(`${environment.apiStudent}`)
}

public updateStudent(id:any ,Student1: any){
  return this.httpClient.put(`${environment.apiStudent}/updateStudent/${id}`,Student1);
}

public deleteStudent(id: number) {
  return this.httpClient.delete(`${environment.apiStudent}/${id}`);
}

}
