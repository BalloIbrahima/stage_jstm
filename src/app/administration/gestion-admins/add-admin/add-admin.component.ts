import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminLoginService } from 'src/app/services/admin_login/admin-login.service';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {

  email:any
  nom:any
  prenom:any
  poste:any
  type_admin:any
  password:any
  msg:any
  photo:any=null
  super_admin:boolean
  reponse_admin:any

  constructor(public dialog: MatDialog, private user_service:UserServiceService,private admin_service:AdminLoginService, private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
  }


  // reception du formulaire
  onSubmit(form:NgForm){
    //recuperation des valeur des balises select
    var select_type=document.getElementById("type_admin")  as HTMLSelectElement;
    var choix_type=select_type.selectedIndex;

    this.type_admin=select_type.options[choix_type].value;
    if(this.type_admin=="Super administrateur") {this.super_admin=true}
    else {this.super_admin=false}

    this.email=form.value['email'];
    this.nom=form.value['nom'];
    this.prenom=form.value['prenom'];
    this.poste=form.value['poste'];


    this.spinner.show()

    this.msg=""
    
    const admin=[{
      "idAdmin":null,
      "prenom":this.prenom,
      "nom":this.nom,
      "poste":this.poste,
      "email":this.email,
      "password":"JSTM@admin",
      "superAdmin":this.super_admin,
      "imgPath":"",
      "active":true

    }]
    
    try{ 
      this.admin_service.Register(admin,this.photo).subscribe(res=>{
        if(res.type===HttpEventType.UploadProgress){
          
        }else if(res instanceof HttpResponse){ 
          this.reponse_admin=res.body
          console.log(res.body)
          if(this.reponse_admin.message=="isertion effectue avec succes"){
            this.spinner.hide();
            const dialogclo = this.dialog.closeAll();
            // this.user_service.isAuth=true;
            // this.admin_service.LesAdmins=this.reponse_admin.data;
            this.admin_service.ajout=true
            // localStorage.setItem("all_admin", JSON.stringify(this.reponse_admin.data));
            // this.user_service.verifier()


            

          }else if(this.reponse_admin.message =="Admin allready exist"){
            this.msg="Cet adresse email existe déja";
            this.spinner.hide();
          }else if(this.reponse_admin.message != "isertion effectue avec succes" && this.reponse_admin.message !="User allready exist" ){
            this.msg="Erreur d'acces au serveur"
            this.spinner.hide();
          }
        }
      })

        // await this.timeout(10000)
        // if(res.message=""){
        //   this.msg="Vérifier votre connexion internet." ;
        // }
      
    }catch{        
      this.msg="Impossible d'acceder au server" ;
      this.spinner.hide()
    }
  
  }

  timeout(ms:any) {
    return new Promise(resolve => setTimeout(resolve,ms));
  }

  // cose dialog
  close(): void {
    const dialogclo = this.dialog.closeAll();
  }
}
