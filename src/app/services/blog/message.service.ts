import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages:any;
  private env=environment

  constructor(private http:HttpClient) { }

  //envoie de message de de message
  creation_message(message:any):Observable<any>{
    return this.http.post(`${this.env.api}/message`,message);
  }

  //recuperation des messages d'un sujet

  sujet_de(id:any,params:any):Observable<any>{
    return this.http.get(`${this.env.api}/messages/`+id,{params})
  }
  nbreMessage(id:any):Observable<any>{
    return this.http.get(`${this.env.api}/nbreMessage/`+id)
  }

  addVue(vue:any):Observable<any>{
    return this.http.post(`${this.env.api}/vue`,vue)
  }

  nbreVue(id:any):Observable<any>{
    return this.http.get(`${this.env.api}/vueMsg/`+id)
  }

}
