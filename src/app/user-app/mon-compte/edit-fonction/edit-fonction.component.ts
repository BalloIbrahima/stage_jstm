import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';

@Component({
  selector: 'app-edit-fonction',
  templateUrl: './edit-fonction.component.html',
  styleUrls: ['./edit-fonction.component.scss']
})
export class EditFonctionComponent implements OnInit {
  fonction:any
  msg:any
  reponse_change:any
  new_img:any=null


  constructor(public dialog: MatDialog, private user_service:UserServiceService,private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
  }

  // reception du formulaire
  onSubmit(form:NgForm){
    this.fonction=form.value['fonction'];
    
    
    this.spinner.show()

    this.msg=""
    this.user_service.utilisateur.fonction=this.fonction
  
    //verification si l'ancien mots de passe est correct
    try{ this.user_service.Modifier_compte(this.user_service.utilisateur,this.new_img).subscribe(async res=>{
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
