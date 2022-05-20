import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  LesAdmins:any;
  page_mon_compte=false;
  my_compte_open=false;
  isAuth=false;
  admin:any;
  ajout:boolean;
  private env=environment

  verifier(){
   
    this.admin = JSON.parse(localStorage.getItem("admin") || '');
    if(this.admin==''){
      this.isAuth=false;
    }else{
      this.isAuth=true;
      console.log('okk')
    }
    

}
  constructor(private http:HttpClient) { }

   Login(admin:any):Observable<any>{
    return this.http.post(`${this.env.api}/auth`,admin);
  }
  //creation de compte
  Register(admin:any,photo:File):Observable<any>{
    const data:FormData=new FormData();
    data.append('file', photo);

    data.append('admin', JSON.stringify(admin).slice(1,JSON.stringify(admin).lastIndexOf(']')));
    const new_request=new HttpRequest('POST',`${this.env.api}/admin`, data,{reportProgress:true});
    return this.http.request(new_request)

  }

  // recuperation des admins
  AllAdmin():Observable<any>{
    return this.http.get(`${this.env.api}/Admin`);
  }

  // modification du compte d'un admin
  Modifier_admin(admin:any,photo:File){
    const data:FormData=new FormData();
    data.append('file', photo);

    data.append('admin', JSON.stringify(admin).slice(1,JSON.stringify(admin).lastIndexOf(']')));
    const new_request=new HttpRequest('PUT',`${this.env.api}/admin`, data,{reportProgress:true});
    return this.http.request(new_request)

  }
 

}
