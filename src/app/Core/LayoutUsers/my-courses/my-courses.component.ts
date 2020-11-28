import { Component, OnInit } from '@angular/core';
import {response} from 'express';
import {LayoutuserService} from '../layoutuser.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  listCourse: any[];

  constructor(private Service: LayoutuserService) {
  }

  ngOnInit() {
    this.getcours();
  }

  getcours() {
    this.Service.listCourse().subscribe((response) => {
      if (response.success===true) {
        this.listCourse=response.data;
      }

    });
  }
}
