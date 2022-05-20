import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CKEditorComponent } from 'ng2-ckeditor';
import { AdminLoginService } from 'src/app/services/admin_login/admin-login.service';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-formulaire-article',
  templateUrl: './formulaire-article.component.html',
  styleUrls: ['./formulaire-article.component.scss']

})
export class FormulaireArticleComponent implements OnInit {

  img_article="";
  msg="Veuillez choisir une image pour l'article!" ;
  msg_vide=false;
  article_exist=false;
  // public Editor=ClassicEditor;

  titre: any;
  resume: any;
  rubrique: any;
  categorie: any;
  credit_photo:any;
  contenu:any;
  showFiles=false;
  ckeditorContent: any;
  name = 'Angular';
  image_interne="";
  photo:any=null;
  img_principal:any;
  response_article:any;
  @ViewChild('ckeditor') ckeditor:CKEditorComponent
  constructor(private adminService:AdminLoginService,private articleService:ArticleService,private active_route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.ckeditor.ckeditorInit

    
    
  }
  //quand on selectionne l'image principale de l'article

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
        this.img_principal=e.target['files'][0];
        this.img_article=event.target.result;
      }
    }
  }
  //creation de l'article
  creer_article(form:NgForm){
    this.article_exist=false;
    //recuperation des valeur des balises select
    var select_cat=document.getElementById("categorie")  as HTMLSelectElement;
    var select_rub=document.getElementById("rubrique") as HTMLSelectElement;
    var choix_cat=select_cat.selectedIndex;
    var choix_rub=select_rub.selectedIndex;

    this.rubrique=select_rub.options[choix_rub].value;
    this.categorie=select_cat.options[choix_cat].value;
    // 
    this.titre=form.value['titre'];
    this.resume=form.value['resume'];
    this.credit_photo=form.value['credit_photo'];

    
    const article=[
      {
        "idArticle":null,
        "titre":this.titre,
        "resume":this.resume,
        "contenue":this.ckeditorContent,
        "categorie":this.categorie,
        "rubrique":this.rubrique,
        "date":"",
        "creditPhoto":this.credit_photo,
        "imagePath":"",
        "admin":this.adminService.admin
      }

      
    ];

    // console.log(article);


    this.articleService.CreateArticle(article,this.img_principal).subscribe(res=>{

      if(res.type===HttpEventType.UploadProgress){
          
      }else if(res instanceof HttpResponse){
        this.response_article = res.body;

        if(this.response_article.message=="succes"){
          console.log(this.response_article.message)
          form.resetForm();
          this.ckeditorContent=" ";
          this.img_article="";
          this.img_principal=null;
          this.router.navigate(['../'],{relativeTo:this.active_route})

        }else if(this.response_article.message=="article allready exist"){

          console.log(this.response_article.message)
          this.article_exist=true;


        }else{
          console.log(this.response_article.message,"erreur inconnue")

        }
      
      
      }

    })
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

  openImageExplorer($event: any) {
   document.getElementById("img")?.click()

  }
  
  tof_uphload(e:any){
      //verification si une photo a été choisie ou pas
      if(!e.target.files[0] || e.target.files[0].length==0){
        return;
      }
  
      //verification du type de fichier choisi pour recaler si ce n'est pas une photo
      var tof_type=e.target.files[0].type;
      if(tof_type.match(/image\/*/)==null){
        return;
      }
  
  
  
      if(e.target.files){
        var reader= new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=(event:any)=>{
          this.image_interne=event.target.result;
          this.photo=e.target['files'][0];  

          try
          {
            let link = this.ckeditor.instance.document.createElement("img");
            link.setAttribute("alt", "Image");
            // link.setAttribute("class","img-fluid")
            link.setAttribute("src",event.target.result);

            this.ckeditor.instance.insertElement(link);
          }
          catch(error)
          {
            console.log((<Error>error).message);
          }   
        }

        
      }

    

  }
 
  onSubmit() {
      // console.log( `Form submit, model: ${ JSON.stringify( this.model ) }` );
  }
}
