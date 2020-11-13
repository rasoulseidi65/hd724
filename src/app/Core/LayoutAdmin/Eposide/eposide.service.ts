import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EposideService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }
  indexCourse() {
    return this.http.get('http://localhost:3000/api/v1/admin/index');
  }
  storeEposide(data:any) {
    return this.http.post('http://localhost:3000/api/v1/admin/episode',data);
  }
  uploadVideo(video:any) {
    return this.http.post('http://localhost:3000/api/v1/admin/video', video);
  }

}
