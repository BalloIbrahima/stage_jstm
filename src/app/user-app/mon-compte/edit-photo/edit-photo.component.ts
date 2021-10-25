import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.scss']
})
export class EditPhotoComponent implements OnInit {

  photo:any=null;
  icone_user:string="assets/img/avatar.svg";
  msg:any
  reponse_change:any


  constructor(public dialog: MatDialog, private user_service:UserServiceService,private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
    // if (this.user_service.utilisateur.imgPath==""){
    //   this.icone_user="assets/img/avatar.svg"
    // }else{
    //   this.icone_user=this.user_service.utilisateur.imgPath
    // }

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

  // reception du formulaire
  onSubmit(form:NgForm){
   
    this.spinner.show()

    this.msg=""
    this.user_service.utilisateur.imgPath=""
  
    //verification si l'ancien mots de passe est correct
    try{ this.user_service.Modifier_compte(this.user_service.utilisateur,this.photo).subscribe(async res=>{
        this.reponse_change=res;
        if(this.reponse_change.message=="chnger"){
          const lecteur=this.reponse_change.data
        localStorage.setItem("person", JSON.stringify(lecteur));

        const dialogclo = this.dialog.closeAll();
        this.spinner.hide()
        this.user_service.verifier()
        }else{
          this.msg="Une erreur s'est produite";
          this.spinner.hide()
        }

        await this.timeout(10000)
        this.msg="Vérifier votre connexion internet." ;

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
