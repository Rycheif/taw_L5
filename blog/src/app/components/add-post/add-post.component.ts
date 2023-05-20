import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private service: DataService, private router: Router) {
  }

  public newPost: Post = {
    title: '',
    text: '',
    image: '',
  };

  ngOnInit(): void {
  }

  create() {
    const result = this.service.createNewPost(this.newPost).subscribe(result => result);
    if (!result) {
      window.alert("Post was not added");
    }
    this.router.navigate(['/blog']);
  }

}
