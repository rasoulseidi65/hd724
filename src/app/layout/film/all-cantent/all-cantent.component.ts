import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-all-cantent',
  templateUrl: './all-cantent.component.html',
  styleUrls: ['./all-cantent.component.scss']
})
export class AllCantentComponent implements OnInit {
  customOptions: OwlOptions = {
    rtl: true,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    nav: true,
    navText: ['<i class="fa fa-chevron-left fa-2x"></i>', '<i class="fa fa-chevron-right fa-2x"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 4
      }
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
