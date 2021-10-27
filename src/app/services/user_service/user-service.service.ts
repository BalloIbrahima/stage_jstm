import { Injectable, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService implements OnDestroy{
  page_mon_compte=false;
  my_compte_open=false;
  isAuth=false;
  utilisateur:any;
  IsAdmin=false;
  private env=environment;
  subscription: Subscription;
  verifier(){
   
      this.utilisateur = JSON.parse(localStorage.getItem("person") || '');
      if(this.utilisateur==''){
        this.isAuth=false;
      }else{
        this.isAuth=true;
        console.log('okk')
      }
      

  }
  

 

  constructor(private http:HttpClient) { 
    this.subscription=interval(1000).subscribe(
      (val)=>{
        this.verifier()
      }
    )
    
  }
 

   Login(data:any):Observable<any>{
    return this.http.post(`${this.env.api}/auth`,data);
  }
  //creation de compte
  creation_compte(user:any,photo:File){
    const data:FormData=new FormData();

    data.append('file', photo);

    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    const new_request=new HttpRequest('POST',`${this.env.api}/user`, data,{reportProgress:true});
    return this.http.request(new_request)
  
  }
  //modification lecteur
  Modifier_compte(user:any,photo:File):Observable<any>{
    const data:FormData=new FormData();

    data.append('file', photo);

    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    console.log("uiop  "+JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    const new_request=new HttpRequest('PUT',`${this.env.api}/edit_user`, data,{reportProgress:true});
    return this.http.request(new_request)
  
  }
  //la listes des lecteurs
  Nos_lecteurs(){
    return this.http.get(`${this.env.api}/LesLecteurs`)
  }  

  // recuperation d'un lecteur en particulier

  Ce_Lecteur(id:any){
    return this.http.get(`${this.env.api}/Lecteur`)
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
