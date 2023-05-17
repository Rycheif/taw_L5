import {Component, Input, OnInit} from '@angular/core';

export interface Post {
  title: string;
  text:  string;
  image: string;
  id:    string;
}

@Component({
  selector: 'blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  @Input() image?: string;
  @Input() text?: string;
  @Input() id?: string;

  ngOnInit(): void {
  }


}
