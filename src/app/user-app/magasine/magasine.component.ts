import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
declare var require : any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-magasine',
  templateUrl: './magasine.component.html',
  styleUrls: ['./magasine.component.scss']
})
export class MagasineComponent implements OnInit {

  magazines = [
    {
      "nom" : "JSTM_MAG_N_28",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_28.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/jstm_28.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_29",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_29.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/JSTM-29.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_28",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_29.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/jstm_29.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_29",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_28.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/JSTM-28.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_28",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_28.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/jstm_28.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_29",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_29.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/JSTM-29.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_28",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_29.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/jstm_29.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_29",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_28.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/JSTM-28.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_28",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_28.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/jstm_28.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_29",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_29.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/JSTM-29.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_29",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_29.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/JSTM-29.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_29",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_28.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/JSTM-28.pdf"
    }
  ]
  currentMag = [
    {
      nom : '',
      fichier : ''
    }
  ];
  page : number = 1;
  allpage : number = 0 ;
  isLoaded : boolean | undefined;
  fichier : string = "http://localhost:80/jstm/magazines/pdf/jstm_28.pdf";
  pdfFile : any;

  constructor(private spinner : NgxSpinnerService ,  private apiService : ArticleService) { }

  ngOnInit(): void {
    // this.spinner.show();
    // if(this.videos.length>0){
    //   this.spinner.hide();
    // }
    $('#staticBackdrop1').appendTo('body');
  }

  onGetPdf(link : any) {
    if(link != null){
      this.apiService.downloadPdf(link).subscribe(response => {
        console.log(response);
        this.pdfFile = response;
      });
      const magazine = this.magazines.find((s)=>{
        return s.fichier === link;
    });
    if(magazine != null){
      this.currentMag[0].nom = magazine.nom;
      this.currentMag[0].fichier = magazine.fichier;
    }
    }else{
      this.page = 1;
    }
    
  }

  onAfterLoadCompleted(pdfData: any){
    this.allpage = pdfData.pagesCount;
    this.isLoaded = true;
    console.log(this.allpage);
  }
 
  ///////mise en comment pour blème
  nextPage(){
    this.page++;
  }

  prevPage(){
    this.page--;
  }

  onDownloadPdfFile(pdfUrl : string, pdfName : string){
    FileSaver.saveAs(pdfUrl,pdfName);
  }

}
