import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminLoginService } from 'src/app/services/admin_login/admin-login.service';
import { ModifierPasswordComponent } from './modifier-password/modifier-password.component';

@Component({
  selector: 'app-admin-moncompte',
  templateUrl: './admin-moncompte.component.html',
  styleUrls: ['./admin-moncompte.component.scss']
})
export class AdminMoncompteComponent implements OnInit {

  invalid:boolean;
  aucune_modif:boolean;
  acces_server:boolean;
  constructor(public router:Router,public dialog: MatDialog,private spinner : NgxSpinnerService,public admin_service:AdminLoginService) { }

  ngOnInit(): void {
    this.spinner.hide()
  }
  //creation de la fonction create_admin

  prenom:any;
  nom:any;
  poste:any;
  dateNaissance:any;
  email:any;
  mot_de_passe:any;
  super_admin:boolean;
  image_admin:any=null;
  image_admin_new:any;
  reponse_admin:any;

  msg:any;
  icone_user:string="assets/img/avatar.svg";

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
        this.image_admin=e.target['files'][0];
      }
    }
  }



  onSubmit(){

    this.acces_server=false;
    this.aucune_modif=false;
    
    if(this.image_admin!=null){
      this.admin_service.Modifier_admin(this.admin_service.admin.admin,this.image_admin).subscribe(res=>{
        if(res.type===HttpEventType.UploadProgress){
        
        }else if(res instanceof HttpResponse){
          this.reponse_admin=res;
          if(this.reponse_admin.message="succes"){
           location.reload();

          }else{
          }
        }
      })
    }
    
  }
    
    
  modifier_password(): void {
    const dialogclo = this.dialog.closeAll();
    const dialogRef = this.dialog.open(ModifierPasswordComponent, {
      
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  


}
