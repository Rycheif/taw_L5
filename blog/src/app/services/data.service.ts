import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../components/blog-item/blog-item.component";

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
    console.log(id);
    return this.http.get<Post>(this.url + '/api/posts/' + id);
  }


}
