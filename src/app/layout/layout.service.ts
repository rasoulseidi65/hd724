import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private http: HttpClient) { }
  listCourse(){
    return this.http.get('http://localhost:1025/api/v1/users/course');
  }
  listNewCourse(){
    return this.http.get('http://localhost:1025/api/v1/users/newCourse');
  }
  listViewMaxCourse(){
    return this.http.get('http://localhost:1025/api/v1/users/viewMaxCourse');
  }
  findCourse(id:any){
    return this.http.post('http://localhost:1025/api/v1/users/courseFind',id);
  }
  listArticle(){
    return this.http.get('http://localhost:1025/api/v1/users/article');
  }
  findArticle(id:any){
    return this.http.get('http://localhost:1025/api/v1/users/findArticle/'+id);
  }
  newestArticle(){
    return this.http.get('http://localhost:1025/api/v1/users/newest');
  }
  newComment(data: any) {
    return this.http.post('http://localhost:1025/api/v1/users/comment',data);
  }
}
