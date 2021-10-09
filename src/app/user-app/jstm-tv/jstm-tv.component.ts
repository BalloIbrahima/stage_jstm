import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { takeUntil } from 'rxjs/operators';
import { JstmTvService } from 'src/app/services/jstm_tv/jstm-tv.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-jstm-tv',
  templateUrl: './jstm-tv.component.html',
  styleUrls: ['./jstm-tv.component.scss']
})
export class JstmTvComponent implements OnInit {

  videos : any[] = [];

  // videos = [
  //   {
  //     "kind": "youtube#searchResult",
  //     "etag": "gHoCrd06njl8nL9PripmFDZ732c",
  //     "id": {
  //       "kind": "youtube#video",
  //       "videoId": "8n_8M4rIuu4"
  //     },
  //     "snippet": {
  //       "publishedAt": "2021-03-17T21:01:22Z",
  //       "channelId": "UCQzEm3H4Gec8U-WAuYJtsGw",
  //       "title": "COLAB: PRESENTATION DE 5 PROJETS PORTANT SUR LA SANTE DE LA MERE ET DE L&#39;ENFANT",
  //       "description": "Le Mardi 16 Mars 2021, s'est tenu au mémorial Modibo Keita une présentation des projets lauréats du programme CoLAB sous le thème « Santé de la mère et ...",
  //       "thumbnails": {
  //         "default": {
  //           "url": "https://i.ytimg.com/vi/8n_8M4rIuu4/default.jpg",
  //           "width": 120,
  //           "height": 90
  //         },
  //         "medium": {
  //           "url": "https://i.ytimg.com/vi/8n_8M4rIuu4/mqdefault.jpg",
  //           "width": 320,
  //           "height": 180
  //         },
  //         "high": {
  //           "url": "https://i.ytimg.com/vi/8n_8M4rIuu4/hqdefault.jpg",
  //           "width": 480,
  //           "height": 360
  //         }
  //       },
  //       "channelTitle": "JSTM TV",
  //       "liveBroadcastContent": "none",
  //       "publishTime": "2021-03-17T21:01:22Z"
  //     }
  //   },
  //   {
  //     "kind": "youtube#searchResult",
  //     "etag": "yS-WCTzBUP-jI5w_o4DNYpfF_UU",
  //     "id": {
  //       "kind": "youtube#video",
  //       "videoId": "icoT3AkX3Zs"
  //     },
  //     "snippet": {
  //       "publishedAt": "2021-03-12T17:31:22Z",
  //       "channelId": "UCQzEm3H4Gec8U-WAuYJtsGw",
  //       "title": "Flash des Sciences",
  //       "description": "",
  //       "thumbnails": {
  //         "default": {
  //           "url": "https://i.ytimg.com/vi/icoT3AkX3Zs/default.jpg",
  //           "width": 120,
  //           "height": 90
  //         },
  //         "medium": {
  //           "url": "https://i.ytimg.com/vi/icoT3AkX3Zs/mqdefault.jpg",
  //           "width": 320,
  //           "height": 180
  //         },
  //         "high": {
  //           "url": "https://i.ytimg.com/vi/icoT3AkX3Zs/hqdefault.jpg",
  //           "width": 480,
  //           "height": 360
  //         }
  //       },
  //       "channelTitle": "JSTM TV",
  //       "liveBroadcastContent": "none",
  //       "publishTime": "2021-03-12T17:31:22Z"
  //     }
  //   },
  //   {
  //     "kind": "youtube#searchResult",
  //     "etag": "dXVA69suORSRl2_uYkK9Sbrs1DE",
  //     "id": {
  //       "kind": "youtube#video",
  //       "videoId": "oQ2SrHKdoSg"
  //     },
  //     "snippet": {
  //       "publishedAt": "2021-03-10T12:17:16Z",
  //       "channelId": "UCQzEm3H4Gec8U-WAuYJtsGw",
  //       "title": "Recherche scientifique : Table ronde d’échanges entre chercheurs et utilisateurs des résultats",
  //       "description": "Une table ronde d'échanges entre chercheurs, inventeurs, innovateurs et utilisateurs des résultats de recherche scientifique a débuté ce mardi 9 mars, à l'Hôtel ...",
  //       "thumbnails": {
  //         "default": {
  //           "url": "https://i.ytimg.com/vi/oQ2SrHKdoSg/default.jpg",
  //           "width": 120,
  //           "height": 90
  //         },
  //         "medium": {
  //           "url": "https://i.ytimg.com/vi/oQ2SrHKdoSg/mqdefault.jpg",
  //           "width": 320,
  //           "height": 180
  //         },
  //         "high": {
  //           "url": "https://i.ytimg.com/vi/oQ2SrHKdoSg/hqdefault.jpg",
  //           "width": 480,
  //           "height": 360
  //         }
  //       },
  //       "channelTitle": "JSTM TV",
  //       "liveBroadcastContent": "none",
  //       "publishTime": "2021-03-10T12:17:16Z"
  //     }
  //   },
  //   {
  //     "kind": "youtube#searchResult",
  //     "etag": "8B_sUG6OL-VG2GA3Up-rS_CrGrI",
  //     "id": {
  //       "kind": "youtube#video",
  //       "videoId": "XoNmEy-iYgY"
  //     },
  //     "snippet": {
  //       "publishedAt": "2021-03-04T09:17:11Z",
  //       "channelId": "UCQzEm3H4Gec8U-WAuYJtsGw",
  //       "title": "Flash des Sciences",
  //       "description": "",
  //       "thumbnails": {
  //         "default": {
  //           "url": "https://i.ytimg.com/vi/XoNmEy-iYgY/default.jpg",
  //           "width": 120,
  //           "height": 90
  //         },
  //         "medium": {
  //           "url": "https://i.ytimg.com/vi/XoNmEy-iYgY/mqdefault.jpg",
  //           "width": 320,
  //           "height": 180
  //         },
  //         "high": {
  //           "url": "https://i.ytimg.com/vi/XoNmEy-iYgY/hqdefault.jpg",
  //           "width": 480,
  //           "height": 360
  //         }
  //       },
  //       "channelTitle": "JSTM TV",
  //       "liveBroadcastContent": "none",
  //       "publishTime": "2021-03-04T09:17:11Z"
  //     }
  //   },
  //   {
  //     "kind": "youtube#searchResult",
  //     "etag": "GkqDbk2N9ZxwG3ObXz4QnB_XWRM",
  //     "id": {
  //       "kind": "youtube#video",
  //       "videoId": "QB5-4zWwD6c"
  //     },
  //     "snippet": {
  //       "publishedAt": "2021-02-27T18:37:18Z",
  //       "channelId": "UCQzEm3H4Gec8U-WAuYJtsGw",
  //       "title": "Reportage Robots Mali",
  //       "description": "",
  //       "thumbnails": {
  //         "default": {
  //           "url": "https://i.ytimg.com/vi/QB5-4zWwD6c/default.jpg",
  //           "width": 120,
  //           "height": 90
  //         },
  //         "medium": {
  //           "url": "https://i.ytimg.com/vi/QB5-4zWwD6c/mqdefault.jpg",
  //           "width": 320,
  //           "height": 180
  //         },
  //         "high": {
  //           "url": "https://i.ytimg.com/vi/QB5-4zWwD6c/hqdefault.jpg",
  //           "width": 480,
  //           "height": 360
  //         }
  //       },
  //       "channelTitle": "JSTM TV",
  //       "liveBroadcastContent": "none",
  //       "publishTime": "2021-02-27T18:37:18Z"
  //     }
  //   },
  //   {
  //     "kind": "youtube#searchResult",
  //     "etag": "6ILKtZQm6Azv0eRrLqye20IF3l4",
  //     "id": {
  //       "kind": "youtube#video",
  //       "videoId": "Ge4UIzfBokU"
  //     },
  //     "snippet": {
  //       "publishedAt": "2021-02-25T08:48:46Z",
  //       "channelId": "UCQzEm3H4Gec8U-WAuYJtsGw",
  //       "title": "Voici pourquoi nous devons manger les criquets",
  //       "description": "",
  //       "thumbnails": {
  //         "default": {
  //           "url": "https://i.ytimg.com/vi/Ge4UIzfBokU/default.jpg",
  //           "width": 120,
  //           "height": 90
  //         },
  //         "medium": {
  //           "url": "https://i.ytimg.com/vi/Ge4UIzfBokU/mqdefault.jpg",
  //           "width": 320,
  //           "height": 180
  //         },
  //         "high": {
  //           "url": "https://i.ytimg.com/vi/Ge4UIzfBokU/hqdefault.jpg",
  //           "width": 480,
  //           "height": 360
  //         }
  //       },
  //       "channelTitle": "JSTM TV",
  //       "liveBroadcastContent": "none",
  //       "publishTime": "2021-02-25T08:48:46Z"
  //     }
  //   }
  // ];

  descrip : string = '';

  globalVideo : any = [];
  liste : any = [];

  
  // private youtubeService : JstmTvService;
  constructor(private spinner : NgxSpinnerService,private youtubeService : JstmTvService) { }
  

  ngOnInit(): void {

    $('#staticBackdrop').appendTo('body');

    this.spinner.show()
    // setTimeout(()=>{
    //   this.spinner.hide()
    // },3000);

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    

    this.videos = [];

    this.youtubeService.getVideosForChannel("UCQzEm3H4Gec8U-WAuYJtsGw",50)
    .subscribe(lista =>{
      this.globalVideo=lista;
      
      for(let element of lista["items"]){
        this.videos.push(element)
      }
      console.log("patatipatata")
     if(this.videos.length>0){
       this.spinner.hide();
     }

    });

  }
  
  onGetVideoId(title : any){
    const video = this.videos.find((s)=>{
      // if(s== undefined || s == null){
      //   return this.descrip=''
      // }else
        return s.snippet.title === title;
    });
    if(video != null){
      this.descrip = video.id.videoId;
      console.log(this.descrip);
      return this.descrip;
    }
    else{
      console.log(this.descrip);
      return this.descrip='';
    } 
  }
 

}
