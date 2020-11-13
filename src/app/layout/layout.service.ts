import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private http: HttpClient) { }
  listCourse(){
    return this.http.get('http://localhost:3000/api/v1/users/course');
  }
  findCourse(id:any){
    return this.http.post('http://localhost:3000/api/v1/users/courseFind',id);
  }
}
