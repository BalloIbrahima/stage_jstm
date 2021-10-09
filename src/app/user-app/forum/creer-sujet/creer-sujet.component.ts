import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';
import * as $ from 'jquery';
import { ActivatedRoute, Router } from '@angular/router';
import { SujetService } from 'src/app/services/blog/sujet.service';
import { MessageService } from 'src/app/services/blog/message.service';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NgxSpinner } from 'ngx-spinner';
import { HttpEventType, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-creer-sujet',
  templateUrl: './creer-sujet.component.html',
  styleUrls: ['./creer-sujet.component.scss']
})
export class CreerSujetComponent implements OnInit {
  titre: any;
  mesg: any;
  rubrique: any;
  categorie: any;
  image_sujet:any;
  reponse_sujet:any;
  reponse_message:any;
  msg_erreur="";
  invalid:boolean;
 image_path:string="";

  constructor( public messageservice:MessageService ,public blogservice:SujetService ,public router:Router,private active_route:ActivatedRoute,public dialog: MatDialog, public user_service:UserServiceService) { }

  ngOnInit(): void {
    if(this.user_service.isAuth==false){
      this.router.navigate(['./../jstm'])
    }
  }


  // choix de la photo du sujet
  msg:any;
  icone_sujet=this.user_service.utilisateur.img_path
  //verification de l'authentification de l'utilisateur
  creer_sujet(form:NgForm){
    // this.spinner.show
    this.msg_erreur="";
    //recuperation des valeur des balises select
    var select_cat=document.getElementById("categorie")  as HTMLSelectElement;
    var select_rub=document.getElementById("rubrique") as HTMLSelectElement;
    var choix_cat=select_cat.selectedIndex;
    var choix_rub=select_rub.selectedIndex;

    this.rubrique=select_rub.options[choix_rub].value;
    this.categorie=select_cat.options[choix_cat].value;
    // 
    this.titre=form.value['titre'];
    this.mesg=form.value['message'];
    const sujet=
      {
        "idSujet":null,
        "titre":this.titre,
        "rubrique":this.rubrique,
        "categorie":this.categorie,
        "dateCreation":'',
        "user":this.user_service.utilisateur,
        "admin":null
      }
    
    this.blogservice.creation_sujet(sujet).subscribe(res=>{
      this.reponse_sujet=res;

        if(this.reponse_sujet.message=="valid"){
  
            this.blogservice.sujet=this.reponse_sujet.data;

            const messages= {
              'idMessage':null,
              'text':this.mesg,
              'date':'',
              'sujet':this.blogservice.sujet,
              'user':this.user_service.utilisateur,
              'admin':null,
            }

            // après la creation du sujet, c'est lenvoie du premier message a la base
            this.messageservice.creation_message(messages).subscribe(res=>{
              this.reponse_message=res;
              if(this.reponse_message.message=="create"){
                this.messageservice.messages=this.reponse_message.data;
                const id=this.blogservice.sujet.idSujet;
                this.router.navigate(['../chat',this.blogservice.sujet.idSujet],{relativeTo:this.active_route})
              
                console.log("trueee"+this.blogservice.sujet.idSujet)
                // this.router.navigate(['../'t])
              }else{
                this.invalid=true;
                this.msg_erreur="Erreur lors de la creation du sujet, veuillez réessayer"
              }
            })

            console.log(this.reponse_message)
  
          }
          // else if(this.reponse_message.message="exist"){
          //   this.invalid=true;
          //   this.msg_erreur="Un sujet du meme nom existe déja !"
          // }
        else{
            this.invalid=true;
            this.msg_erreur="Erreur lors de la creation du sujet, veuillez réessayer"
            // this.spinner.hide
        }
  
      
    })

          // this.user_service.Login({"email":this.mail,"password":this.password}).subscribe(res=>{
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

}
