import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminLoginService } from 'src/app/services/admin_login/admin-login.service';
import { ArticleService } from 'src/app/services/article/article.service';
import { MagazineService } from 'src/app/services/magazine/magazine.service';

@Component({
  selector: 'app-formulaire-magasine',
  templateUrl: './formulaire-magasine.component.html',
  styleUrls: ['./formulaire-magasine.component.scss']
})
export class FormulaireMagasineComponent implements OnInit {

  img_article="";
  msg="Veuillez choisir une image pour l'article!" ;
  msg_mag="Veuillez choisir le fichier du magazine"
  msg_vide=false;
  msg_vide_mag=false;
  response_magazine:any;
  pdf_magazine:any;
  titre: any;
  prix: any;
 
  contenu:any;
  mag_exist=false;
  img_mag:any;

  file_mag="";
  constructor(private articleService:ArticleService,private adminService:AdminLoginService,private magazineService:MagazineService,private active_route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }


  //creation de l'article
  creer_magazine(form:NgForm){

    this.mag_exist=false;
    this.titre=form.value['titre'];
    this.prix=form.value['prix'];
    const magasine=[
      {
        "idMagazine":null,
        "titre":this.titre,
        "imagePath":"",
        "pdfPath":"",
        "prix":this.prix,
        "date":"",
        "admin":this.adminService.admin
      }
    ];




    this.magazineService.CreateMagazine(magasine,this.img_mag, this.pdf_magazine).subscribe(res=>{
      console.log(magasine);

      if(res.type===HttpEventType.UploadProgress){
          
      }else if(res instanceof HttpResponse){
        this.response_magazine = res.body;

        if(this.response_magazine.message=="succes"){
          console.log(this.response_magazine.message)
          form.resetForm();
          this.img_article="";
          this.pdf_magazine=null;
          this.router.navigate(['../'],{relativeTo:this.active_route})

        }else if(this.response_magazine.message=="magazine allready exist"){

          console.log(this.response_magazine.message)
          this.mag_exist=true;


        }else{
          console.log(this.response_magazine.message,"erreur inconnue")

        }
      
      
      }
    })
  }

  //choix de la photo du magazine

  onSelectFile(e:any){

    //verification si une photo a été choisie ou pas
    if(!e.target.files[0] || e.target.files[0].length==0){
      this.msg="Vous devez choisir une Image pour l'article!";
      this.msg_vide=false;
      return;
    }

    //verification du type de fichier choisi pour recaler si ce n'est pas une photo
    var tof_type=e.target.files[0].type;
    if(tof_type.match(/image\/*/)==null){
      this.msg="Seul les images sont suportées!!";
      this.msg_vide=false;
      return;
    }



    if(e.target.files){
      var reader= new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.msg="";
        this.msg_vide=true;
        this.img_article=event.target.result;
        this.img_mag=e.target['files'][0];

      }
    }
  }
  //choix du fichier pdf

  onSelectmag(e:any){

    //verification si une photo a été choisie ou pas
    if(!e.target.files[0] || e.target.files[0].length==0){
      this.msg_mag="Vous devez choisir une fichier du magazine!";
      this.msg_vide_mag=false;
      return;
    }

    //verification du type de fichier choisi pour recaler si ce n'est pas une photo
    var tof_type=e.target.files[0].type;
    if(tof_type.match(/pdf\/*/)==null){
      this.msg_mag="Seul les pdf sont suportées!!";
      this.msg_vide_mag=false;
      return;
    }



    if(e.target.files){
      var reader= new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.msg_mag="";
        this.msg_vide_mag=true;
        this.file_mag=event.target.result;
        this.pdf_magazine=e.target['files'][0];
        console.log(e.target['files'][0])

      }
    }
  }



  //gestion du pdf

  
  currentMag = [
    {
      nom : '',
      fichier : ''
    }
  ];
  pdfFile:any;
  page : number = 1;
  allpage : number = 0 ;
  isLoaded : boolean | undefined;

  

  onAfterLoadCompleted(pdfData: any){
    this.allpage = pdfData.pagesCount;
    this.isLoaded = true;
    console.log(this.allpage);
  }

}
