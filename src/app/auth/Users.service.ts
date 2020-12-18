import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Users} from './Users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public token:string;
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  register(data:any): Observable<Users[]> {
    return this.http.post<Users[]>('http://localhost:1025/api/v1/users/register', data);
  }
  login(data:any): Observable<Users[]> {
    return this.http.post<Users[]>('http://localhost:1025/api/v1/users/login', data);
  }
  registerTeacher(data:any): Observable<Users[]> {
    return this.http.post<Users[]>('http://localhost:1025/api/v1/teacher/register', data);
  }
}
