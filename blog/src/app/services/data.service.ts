import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:3001';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url + '/api/posts');
  }

  getById(id: string): Observable<Post> {
    return this.http.get<Post>(this.url + '/api/posts/' + id);
  }

  createNewPost(newPost: Post)
  {
    console.log(newPost);
    return this.http.post<Post>(this.url + '/api/posts', newPost);
  }

}
