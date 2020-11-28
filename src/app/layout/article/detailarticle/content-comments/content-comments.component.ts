import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'article-content-comments',
  templateUrl: './content-comments.component.html',
  styleUrls: ['./content-comments.component.css']
})
export class ContentCommentsComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
