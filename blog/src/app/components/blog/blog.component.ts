import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

import {Post} from "../../models/post";

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public items$: Post[] = [];

  @Input() filterText: string = '';

  constructor(private service: DataService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.service.getAll().subscribe(response => this.items$ = response);
  }
}
