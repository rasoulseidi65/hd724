import { Component, OnInit } from '@angular/core';
import {LayoutService} from '../layout.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  listCourse:any[];
  constructor(private service:LayoutService) { }

  ngOnInit(): void {
    this.service.listCourse().subscribe((response)=>{
      if(response['success']===true){
        this.listCourse=response['data'];

      }
    })
  }

}
