import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Courses} from './courses.model';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {

  }
  uploadFile(image:any) {
    return this.http.post('http://localhost:1025/api/v1/admin/image', image);
  }
  registerCourse(data:any){
    return this.http.post('http://localhost:1025/api/v1/admin/course',data);
  }
  getTeacher(){
    return this.http.get('http://localhost:1025/api/v1/teacher/index');
  }

}
