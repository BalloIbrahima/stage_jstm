import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticleService } from 'src/app/services/article/article.service';

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

  titre: any;
  resume: any;
  rubrique: any;
  categorie: any;
  contenu:any;

  file_mag="";
  constructor(  private apiServicem : ArticleService) { }

  ngOnInit(): void {
  }


  //creation de l'article
  creer_magazine(form:NgForm){

    this.titre=form.value['titre'];
    this.resume=form.value['resume'];
    sujet:[
      {
        
        "titre":this.titre,
        "resume":this.resume,
        
      }

      
    ];

    console.log(this.categorie,this.rubrique);


    // this.user_service.Login({"email":this.mail,"password":this.password}).subscribe(res=>{
    //   this.reponse=res;
    //   if(this.reponse.message=="valid"){
    //     this.user_service.isAuth=true;
    //     this.user_service.utilisateur=this.reponse.data;
    //     const dialogclo = this.dialog.closeAll();
    //     this.invalid=false;
    //   }else{
    //     this.invalid=true;

    //   }
    // })
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

  onGetPdf(e:any,link : any) {
    // 
      //verification si une photo a été choisie ou pas
    if(!e.target.files[0] || e.target.files[0].length==0){
      this.msg_mag="Vous devez choisir le fichier du magazine!";
      this.msg_vide_mag=false;
      return;
    }

    //verification du type de fichier choisi pour recaler si ce n'est pas un pdf
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
      }
    }
    // 
    if(link != null){
      this.apiServicem.downloadPdf(link).subscribe(response => {
        console.log(response);
        this.pdfFile = response;
      });
      // const magazine = this.magazines.find((s)=>{
      //   return s.fichier === link;
      // });
      // if(magazine != null){
      //   this.currentMag[0].nom = magazine.nom;
      //   this.currentMag[0].fichier = magazine.fichier;
      // }
    }else{
      this.page = 1;
      // $('#dernier_mag').click(function(){
      //   location.reload();
      // })
    }
    
  }

  onAfterLoadCompleted(pdfData: any){
    this.allpage = pdfData.pagesCount;
    this.isLoaded = true;
    console.log(this.allpage);
  }

}
