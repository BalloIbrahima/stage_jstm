import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JstmTvService {

  apiKey : string = 'AIzaSyAXBtc9_VkEcRd-tXxvUguNg0OC9w-y64Q'
  channel : string = 'UCQzEm3H4Gec8U-WAuYJtsGw';
  maxResults : number = 50;
  
  constructor(public http : HttpClient) { }

  getVideosForChannel(ch:string,nb:number): Observable<any> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + ch + '&order=date&part=snippet &type=video,id&maxResults=' +nb
    return this.http.get(url)
    .pipe(map((res)=>{
      return res;
    }));

  }

  changePage(pageToken : string){
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + this.channel + '&order=date&pageToken=' +pageToken+ '&part=snippet &type=video,id&maxResults=' + this.maxResults
    return this.http.get(url)
    .pipe(map((res)=>{
      return res;
    }))
  }
  prevPage(pageToken : string){
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + this.channel + '&order=date&pageToken='+pageToken+'&part=snippet &type=video,id&maxResults=' + this.maxResults
    return this.http.get(url)
    .pipe(map((res)=>{
      return res;
    }))
  }
}
