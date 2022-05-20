import { HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  lesArticles:any;
  private env=environment
  constructor(private httpClient : HttpClient) { }
  // /retour de la liste des articles
  getBlog(base_path : string) {
    return this.httpClient.get(base_path).pipe(retry(2), catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
  // retour d'un article en particulier
  article(id:any){
    return this.httpClient.post(`${this.env.api}/message`,id);
  }

  // gestion de telechargement du pdf
  downloadPdf(url:string){
    return this.httpClient.get(url,{headers : new HttpHeaders().set('accept','application/pdf'), responseType: 'blob'});
  }

  CreateArticle(article:any,photo:File):Observable<any>{

    const data:FormData=new FormData();

    data.append('file', photo);

    data.append('article', JSON.stringify(article).slice(1,JSON.stringify(article).lastIndexOf(']')));
    const new_request=new HttpRequest('POST',`${this.env.api}/article/add`, data,{reportProgress:true});
    return this.httpClient.request(new_request)
  
  }
}
