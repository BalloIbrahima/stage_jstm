import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  commentaires:any;
  private env=environment

  constructor(private http:HttpClient) { }

  //creation de compte
  creation_commentaire(commentaire:any,id_article:any):Observable<any>{
    return this.http.post(`${this.env.api}/commentaire`,commentaire);
  }

  //retour des commentaires d'un article en particulier
  // commentaireArticle(id_article:any,params:any){
  //   return this.http.post("http://192.168.43.11:8080/commentaireArticle",id_article);
  // };

  commentaire_de(id:any,params:any):Observable<any>{
    return this.http.get(`${this.env.api}/commentaire/`+id,{params})
  }

}


