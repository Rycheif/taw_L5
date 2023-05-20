import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

import {Post} from "../../models/post";

@Component({
  selector: 'blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.css']
})
export class BlogItemDetailsComponent implements OnInit {

  public image: string = '';
  public text: string = '';

  constructor(private service: DataService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id: string | null = '';
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        id = params.get('id');
      });

    this.service.getById(id).subscribe((res: Post) => {
      this.image = res['image'];
      this.text = res['text'];
    });

  }

}
