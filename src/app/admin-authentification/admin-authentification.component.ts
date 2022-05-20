import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminLoginService } from '../services/admin_login/admin-login.service';
import { UserServiceService } from '../services/user_service/user-service.service';

@Component({
  selector: 'app-admin-authentification',
  templateUrl: './admin-authentification.component.html',
  styleUrls: ['./admin-authentification.component.scss']
})
export class AdminAuthentificationComponent implements OnInit {

  // mail:string;
  // password:string;
  // reponse:any;
  // invalid=false;
  // Eror_server=false;

  user_name:any;
  password:any;
  invalid:boolean;
  reponse:any;

  constructor(public adminService:AdminLoginService,public dialog: MatDialog, private spinner : NgxSpinnerService,private router:Router) { }

  ngOnInit(): void {
    this.spinner.hide()

  }

  //verification de l'authentification de l'utilisateur
  // onSubmit(form:NgForm){
  //   this.invalid=false;
  //   this.Eror_server=false

  //   this.spinner.show()
  //   this.mail=form.value['email'];
  //   this.password=form.value['password'];
  //   user:[
  //     {
  //       "mail":this.mail,
  //       "password":this.password
  //     }
      
  //   ];

  //  try{ this.user_service.Login({"email":this.mail,"password":this.password}).subscribe(res=>{
  //     this.reponse=res;
  //     if(this.reponse.message=="valid"){
  //       this.user_service.isAuth=true;
  //       const lecteur=this.reponse.data
  //       localStorage.setItem("person", JSON.stringify(lecteur));

  //       // this.user_service.utilisateur=this.reponse.data;
  //       const dialogclo = this.dialog.closeAll();
  //       this.invalid=false;
  //       this.spinner.hide()
  //       console.log(this.reponse.data)
  //     }else{
  //       this.invalid=true;
  //       this.spinner.hide()
  //     }
  //   })}catch{        
  //     this.Eror_server=true;
  //     this.spinner.hide()
  //   }

  //   // console.log(this.reponse.data);
  //   // this.user_service.isAuth=true;
  // }

  // constructor(public adminService:AdminLoginService) { }

  // ngOnInit(): void {
  // }

  onSubmit(form:NgForm){
    this.spinner.show()
    this.invalid=false
    this.user_name=form.value['user_name_admin'];
    this.password=form.value['password_admin'];
    const admin=
      {
        "email":this.user_name,
        "password":this.password
      }
      
    ;//{"email":this.mail,"password":this.password}

    this.adminService.Login(admin).subscribe(res=>{
      this.reponse=res;
      if(this.reponse.message=="valid admin"){
        //this.user_service.IsAdmin=true
        const admin_re=this.reponse.data
        //localStorage.setItem("admin", JSON.stringify(admin));
        this.spinner.hide()
        console.log(admin_re)
        this.adminService.admin=admin_re
        this.adminService.isAuth=true;
        this.router.navigate(['admin'])
      }else{
        this.spinner.hide()
        this.invalid=true;

      }
    })

    // console.log(this.reponse.data);
    // this.user_service.isAuth=true;
  }


  // //creation de la fonction create_admin

  // prenom:any;
  // nom:any;
  // poste:any;
  // email:any;
  // mot_de_passe:any;
  // super_admin:boolean;
  // image_admin:any;
  // reponse_admin:any;

  // msg:any;
  // icone_user:string="assets/img/avatar.svg";

  // onSelectFile(e:any){

  //   //verification si une photo a été choisie ou pas
  //   if(!e.target.files[0] || e.target.files[0].length==0){
  //     this.msg="Vous pouvez choisir une photo!";
  //     return;
  //   }

  //   //verification du type de fichier choisi pour recaler si ce n'est pas une photo
  //   var tof_type=e.target.files[0].type;
  //   if(tof_type.match(/image\/*/)==null){
  //     this.msg="Seul les images sont suportées";
  //     return;
  //   }



  //   if(e.target.files){
  //     var reader= new FileReader();
  //     reader.readAsDataURL(e.target.files[0]);
  //     reader.onload=(event:any)=>{
  //       this.msg="";
  //       this.icone_user=event.target.result;
  //       this.image_admin=e.target['files'][0];
  //     }
  //   }
  // }



  // create_admin(form:NgForm){
  //   this.prenom=form.value['prenom']
  //   this.nom=form.value['nom']
  //   this.poste=form.value['poste']
  //   this.email=form.value['email']
  //   this.mot_de_passe=form.value['password']

  //   const admin=[{
  //       'prenom':this.prenom,
  //       'nom':this.nom,
  //       'dateNaissance':"",
  //       'poste':this.poste,
  //       'email':this.email,
  //       'password':this.password,
  //       'IsSuperAdmin':false,

  //   }]
  //   // determination s'il est super Admin ou pas
  //     // this.super_admin=form.value[]
  //     this.adminService.Register(admin,this.image_admin
  //     ).subscribe(res=>{
  //       if(res.type===HttpEventType.UploadProgress){
        
  //       }else if(res instanceof HttpResponse){
  //         this.reponse_admin=res;
  //         if(this.reponse_admin.message="valid"){
  //           this.adminService.LesAdmins=this.reponse_admin.data
  //           // alert("Compte créer avec succes !")

  //         }else{
  //           this.invalid=true
  //         }
  //       }
  //     })

  // }


}
