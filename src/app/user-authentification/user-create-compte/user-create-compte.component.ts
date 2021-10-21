import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserAuthentificationComponent } from '../user-authentification.component';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import * as $ from 'jquery';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-create-compte',
  templateUrl: './user-create-compte.component.html',
  styleUrls: ['./user-create-compte.component.scss']
})
export class UserCreateCompteComponent implements OnInit {

  icone_user:string="assets/img/avatar.svg";
  msg="";
  email="";
  password="";
  re_pass="";
  nom="";
  fonction="";
  photo:any=null;
  imgPath:string="";
  response : any;

  pass_incorect=false;
  acces_server=false;
  mail_exist=false;
  constructor(public router :Router, public dialog: MatDialog,public spinner : NgxSpinnerService,private user_service:UserServiceService) { }

  ngOnInit(): void {
    this.spinner.hide()
    
  }
  //ajout de la photto de profil
  onSelectFile(e:any){

    //verification si une photo a été choisie ou pas
    if(!e.target.files[0] || e.target.files[0].length==0){
      this.msg="Vous pouvez choisir une photo!";
      return;
    }

    //verification du type de fichier choisi pour recaler si ce n'est pas une photo
    var tof_type=e.target.files[0].type;
    if(tof_type.match(/image\/*/)==null){
      this.msg="Seul les images sont suportées";
  
      return;

    }



    if(e.target.files){
      var reader= new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.msg="";
        this.icone_user=event.target.result;
        this.photo=e.target['files'][0];
      }
    }
  }

  //envoi des donnees a la base
  onSubmit(form:NgForm){
    
    this.pass_incorect=false;
    this.acces_server=false;
    this.mail_exist=false;

    this.spinner.show();
    this.email=form.value['mail'];
    this.password=form.value['password'];
    this.re_pass=form.value['password_verification'];
    this.nom=form.value['nom_complet'];
    this.fonction=form.value['fonction'];

    if(this.password!=this.re_pass){
      this.spinner.hide();
      this.pass_incorect=!this.pass_incorect;
    }else if (this.password==this.re_pass){
      const user=[{"idUser":null,"email":this.email,"password":this.password,"nomComplet":this.nom,"fonction":this.fonction,"imgPath":this.imgPath}]
      
      this.user_service.creation_compte(user,this.photo).subscribe(res=>{
        if(res.type===HttpEventType.UploadProgress){
          
        }else if(res instanceof HttpResponse){
          this.response = res.body;
            // alert(this.response.message);
            
            if(this.response.message=="isertion effectue avec succes"){
              this.spinner.hide();
              const dialogclo = this.dialog.closeAll();
              this.user_service.isAuth=true;
              
              // this.user_service.utilisateur=this.response.body;
              localStorage.setItem("person", JSON.stringify(this.response.data));
              this.user_service.verifier()
              
              
              

            }else if(this.response.message =="User allready exist"){
              this.mail_exist=!this.mail_exist;
              this.spinner.hide();
             }else if(this.response.message != "isertion effectue avec succes" && this.response.message !="User allready exist" ){
              this.acces_server=!this.acces_server;
              this.spinner.hide();
            }
          }
      })

    }

    
    // console.log(this.reponse.data);
    // this.user_service.isAuth=true;
  }




  openConnexionDialog(): void {
    const dialogclo = this.dialog.closeAll();
    const dialogRef = this.dialog.open(UserAuthentificationComponent, {
      width: '1000px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
