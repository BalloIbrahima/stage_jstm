import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MagazineService {

  private env=environment;
  constructor(private httpClient : HttpClient) { }
  
  // /retour de la liste des magazines

  CreateMagazine(magazine:any,photo:File,pdf:File):Observable<any>{

    const data:FormData=new FormData();
    data.append('mag', JSON.stringify(magazine).slice(1,JSON.stringify(magazine).lastIndexOf(']')));
    data.append('img', photo);
    data.append('file', pdf);
    const new_request=new HttpRequest('POST',`${this.env.api}/magazine/add`, data,{reportProgress:true});
    return this.httpClient.request(new_request)
  
  }
}
