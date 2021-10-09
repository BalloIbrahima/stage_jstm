import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VueService {

  nbre_vue:any;
  private env=environment

  constructor(private http:HttpClient) { }

  add_vue(vue:any):Observable<any>{
   return this.http.post(`${this.env.api}/vue`,vue);
  }

  article_vue(id_article:any):Observable<any>{
    return this.http.post(`${this.env.api}/NbreVueArticle`,id_article);
   }
}
