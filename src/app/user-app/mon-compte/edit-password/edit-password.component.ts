import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.scss']
})
export class EditPasswordComponent implements OnInit {

  ancien_password:any
  password:any
  msg:any
  reponse_login:any
  reponse_change:any
  new_img:any=null;

  constructor(private router:Router,public dialog: MatDialog, private user_service:UserServiceService,private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
  }

  // reception du formulaire
  async onSubmit(form:NgForm){
    this.spinner.show()

    this.msg=""
    this.password=form.value['password'];
    this.ancien_password=form.value['ancien_password'];
    //verification si l'ancien mots de passe est correct
    try{ this.user_service.Login({"email":this.user_service.utilisateur.email,"password":this.ancien_password}).subscribe(async res=>{
      this.reponse_login=res;
      if(this.reponse_login.message=="valid"){

        // this.user_service.utilisateur.password=this.password

        // const user=[{"idUser":null,"email":this.email,"password":this.password,"nomComplet":this.nom,"fonction":this.fonction,"imgPath":this.imgPath}]

        const user=[{
          "idUser":this.user_service.utilisateur.idUser,
          "email":this.user_service.utilisateur.email,
          "password":this.password,
          "nomComplet":this.user_service.utilisateur.nomComplet,
          "fonction":this.user_service.utilisateur.fonction,
          "imgPath":this.user_service.utilisateur.imgPath,
        }]
        // this.user_service.utilisateur.fonction=this.fonction
      
        //verification si l'ancien mots de passe est correct
        try{ this.user_service.Modifier_compte(user,this.new_img).subscribe( async res=>{
          if(res.type===HttpEventType.UploadProgress){
              
          }else if(res instanceof HttpResponse){         
           this.reponse_change=res.body;
            if(this.reponse_change.message=="succes"){
              const lecteur=this.reponse_change.data
            localStorage.setItem("person", JSON.stringify(lecteur));

            this.spinner.hide()
            // console.log(this.reponse_login.data)
            this.user_service.isAuth=false
            this.user_service.my_compte_open=false;
            this.user_service.page_mon_compte=true;
            localStorage.removeItem("person");
            localStorage.clear();
            this.router.navigate(['../jstm'])
            const dialogclo = this.dialog.closeAll();
            this.user_service.verifier()
            }else{
              this.msg="Une erreur s'est produite";
              this.spinner.hide()
            }
          }

        })}catch{
          this.msg="Impossible d'acceder au server" ;
          this.spinner.hide()
        }
        
      }else{
        this.msg="Vérifier votre ancien mots de passe";
        this.spinner.hide()
      }
      await this.timeout(10000)
      this.msg="Vérifier votre connexion internet." ;
      
      
    })}catch{        
      this.msg="Impossible d'acceder au server" ;
      this.spinner.hide()
    }

    // this.re_pass=form.value['password_verification'];
    // this.nom=form.value['nom_complet'];
    // this.fonction=form.value['fonction'];
  }

  timeout(ms:any) {
    return new Promise(resolve => setTimeout(resolve,ms));
  }

  // cose dialog
  close(): void {
    const dialogclo = this.dialog.closeAll();
  }

}
