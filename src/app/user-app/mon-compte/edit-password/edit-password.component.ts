import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(public dialog: MatDialog, private user_service:UserServiceService,private spinner : NgxSpinnerService) { }

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

        this.user_service.utilisateur.password=this.password

        // const user=[{"idUser":null,"email":this.email,"password":this.password,"nomComplet":this.nom,"fonction":this.fonction,"imgPath":this.imgPath}]

        this.user_service.Modifier_compte(this.user_service.utilisateur,this.new_img).subscribe(res=>{
          this.reponse_change=res;
          if(this.reponse_change.message=="chnger"){
            const lecteur=this.reponse_change.data
          localStorage.setItem("person", JSON.stringify(lecteur));

          const dialogclo = this.dialog.closeAll();
          this.spinner.hide()
          console.log(this.reponse_login.data)
          this.user_service.verifier()
          }else{
            this.msg="Une erreur s'est produite";
            this.spinner.hide()
          }

        })
        
      }else{
        this.msg="Vérifier votre ancien mots de passe";
        this.spinner.hide()
      }
      await this.timeout(10000)
      if(res.message=""){
        this.msg="Vérifier votre connexion internet." ;
      }
      
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
