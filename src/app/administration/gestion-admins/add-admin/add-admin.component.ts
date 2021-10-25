import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {

  nom:any
  prenom:any
  poste:any
  type_admin:any
  password:any
  msg:any

  constructor(public dialog: MatDialog, private user_service:UserServiceService,private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
  }


  // reception du formulaire
  onSubmit(form:NgForm){
    //recuperation des valeur des balises select
    var select_type=document.getElementById("type_admin")  as HTMLSelectElement;
    var choix_type=select_type.selectedIndex;

    this.type_admin=select_type.options[choix_type].value;

    this.nom=form.value['nom'];
    this.prenom=form.value['prenom'];
    this.poste=form.value['poste'];


    this.spinner.show()

    this.msg=""
    
  
    //verification si l'ancien mots de passe est correct
    try{ 
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
