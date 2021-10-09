import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CKEditorComponent} from 'ng2-ckeditor'
declare var CKEditor:any

@Component({
  selector: 'app-formulaire-article',
  templateUrl: './formulaire-article.component.html',
  styleUrls: ['./formulaire-article.component.scss']

})
export class FormulaireArticleComponent implements OnInit {

  img_article="";
  msg="Veuillez choisir une image pour l'article!" ;
  msg_vide=false;

  titre: any;
  resume: any;
  rubrique: any;
  categorie: any;
  contenu:any;
  // @ViewChild('ckeditor') ckeditor:CKEditorComponent
  constructor() { }

  ngOnInit(): void {
    // this.ckeditor.ckeditorInit
    
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
        this.img_article=event.target.result;
      }
    }
  }
  //creation de l'article
  creer_article(form:NgForm){
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
    sujet:[
      {
        
        "titre":this.titre,
        "resume":this.resume,
        "rubrique":this.rubrique,
        "categorie":this.categorie,
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

  ckeditorContent: any;
  name = 'Angular';
  
  public model = {
      name: 'Hardik',
      description: '<p>This is a sample form using CKEditor 4.</p>'
    };
  
  onSubmit() {
      console.log( `Form submit, model: ${ JSON.stringify( this.model ) }` );
  }
}
