import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  LesAdmins:any;
  page_mon_compte=false;
  my_compte_open=false;
  isAuth=false;
  admin:any;
  constructor(private http:HttpClient) { }

   Login(admin:any):Observable<any>{
    return this.http.post("http://192.168.43.11:8080/auth",admin);
  }
  //creation de compte
  Register(admin:any,photo:File){
    const data:FormData=new FormData();
    data.append('file', photo);

    data.append('admin', JSON.stringify(admin).slice(1,JSON.stringify(admin).lastIndexOf(']')));
    const new_request=new HttpRequest('POST','http://192.168.43.11:8080/admin', data,{reportProgress:true});
    return this.http.request(new_request)

  }

  // recuperation des admins
  AllAdmin():Observable<any>{
    return this.http.get("http://192.168.43.11:8080/ListeAdmins");
  }

  // modification du compte d'un admin
  Modifier_admin(admin:any,photo:File){
    const data:FormData=new FormData();
    data.append('file', photo);

    data.append('admin', JSON.stringify(admin).slice(1,JSON.stringify(admin).lastIndexOf(']')));
    const new_request=new HttpRequest('POST','http://192.168.43.11:8080/modifie_admin', data,{reportProgress:true});
    return this.http.request(new_request)

  }

  // modification mots de passe admin
  Password_review(admin:any):Observable<any>{
    return this.http.post("http://192.168.43.11:8080/Modifie_password",admin);
  }

}
