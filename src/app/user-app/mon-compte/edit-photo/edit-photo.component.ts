import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { interval, Subscription } from 'rxjs';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.scss']
})
export class EditPhotoComponent implements OnInit, OnDestroy {

  photo:any=null;
  icone_user:string="assets/img/avatar.svg";
  msg:any
  reponse_change:any

  subscription:Subscription;
  compte_sans_img="";
  nomC:any;
  tableau_img:any;

  constructor(private router:Router,public dialog: MatDialog, private user_service:UserServiceService,private spinner : NgxSpinnerService) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    // if (this.user_service.utilisateur.imgPath==""){
    //   this.icone_user="assets/img/avatar.svg"
    // }else{
    //   this.icone_user=this.user_service.utilisateur.imgPath
    // }
    this.subscription=interval(1000).subscribe(
      (val)=>{
        this.connected()
      }
    )

  }

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
  connected(){
    try{
      if(this.user_service.utilisateur.imgPath==""){
        this.tableau_img=this.user_service.utilisateur.nomComplet
        this.nomC=this.tableau_img.split(" ")

      //
        try{
          this.compte_sans_img=this.nomC[0][0]+this.nomC[1][0]

        }catch{
          this.compte_sans_img=this.nomC[0][0]+this.nomC[0][1]
        }

      }
    }catch{}
  }
  // reception du formulaire
  onSubmit(form:NgForm){
   
    this.spinner.show()
    this.user_service.utilisateur.imgPath="http://192.168.43.8/adamakonake@gmail.com.PNG"
    this.msg=""
    // this.user_service.utilisateur.imgPath=""
    localStorage.removeItem("person");
    const user=[{
      "idUser":this.user_service.utilisateur.idUser,
      "email":this.user_service.utilisateur.email,
      "password":this.user_service.utilisateur.password,
      "nomComplet":this.user_service.utilisateur.nomComplet,
      "fonction":this.user_service.utilisateur.fonction,
      "imgPath":"",
    }]
    // this.user_service.utilisateur.fonction=this.fonction
  
    //verification si l'ancien mots de passe est correct
    try{ this.user_service.Modifier_compte(user,this.photo).subscribe( async res=>{
      if(res.type===HttpEventType.UploadProgress){
          
      }else if(res instanceof HttpResponse){        
        this.reponse_change=res.body;
        if(this.reponse_change.message=="succes"){
          const lecteur=this.reponse_change.data
          localStorage.setItem("person", JSON.stringify(lecteur));

          const dialogclo = this.dialog.closeAll();
          this.spinner.hide()
          this.user_service.verifier()
          // this.router.navigateByUrl('/refresh',{
          //   skipLocationChange:true
          // }).then(()=>{
          //   this.router.navigate(['mon_compte'])
          // })
          window.location.reload()

        }else{
          this.msg="Une erreur s'est produite";
          this.spinner.hide()
        }

        await this.timeout(10000)
        this.msg="Vérifier votre connexion internet." ;
      }
    })
      
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
