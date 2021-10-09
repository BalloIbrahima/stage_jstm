import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SujetService {
  sujet:any;
  les_sujet:any;
  private env=environment

  constructor(private http:HttpClient) { }

  //creation de compte
  creation_sujet(sujet:any):Observable<any>{
    return this.http.post(`${this.env.api}/sujet`,sujet);
  }

  //all subject

  All_Sujet(params:any):Observable<any>{
    return this.http.get(`${this.env.api}/sujet`,{params})
  }

  //recuperer sujet à travers son id

  sujetby(id:number){
    const subject=this.les_sujet.find(
      (s:any)=>{
        return s.idSujet==id;
      }
    );
    return subject;

    // return
  }
}
