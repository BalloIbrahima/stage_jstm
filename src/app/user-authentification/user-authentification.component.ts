import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserServiceService } from '../services/user_service/user-service.service';
import { RecuperationCompteComponent } from './recuperation-compte/recuperation-compte.component';
import { UserCreateCompteComponent } from './user-create-compte/user-create-compte.component';

@Component({
  selector: 'app-user-authentification',
  templateUrl: './user-authentification.component.html',
  styleUrls: ['./user-authentification.component.scss']
})
export class UserAuthentificationComponent implements OnInit {
  mail:string;
  password:string;
  reponse:any;
  invalid=false;
  Eror_server=false;

  constructor(public dialog: MatDialog, private user_service:UserServiceService,private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.hide()

  }

  //verification de l'authentification de l'utilisateur
  onSubmit(form:NgForm){
    this.invalid=false;
    this.Eror_server=false

    this.spinner.show()
    this.mail=form.value['email'];
    this.password=form.value['password'];
    user:[
      {
        "mail":this.mail,
        "password":this.password
      }
      
    ];

   try{ this.user_service.Login({"email":this.mail,"password":this.password}).subscribe(res=>{
      this.reponse=res;
      if(this.reponse.message=="valid"){
        const lecteur=this.reponse.data
        localStorage.setItem("person", JSON.stringify(lecteur));

        // this.user_service.utilisateur=this.reponse.data;
        const dialogclo = this.dialog.closeAll();
        this.invalid=false;
        this.spinner.hide()
        console.log(this.reponse.data)
        this.user_service.verifier()
      }else{
        this.invalid=true;
        this.spinner.hide()
      }
    })}catch{        
      this.Eror_server=true;
      this.spinner.hide()
    }

    // console.log(this.reponse.data);
    // this.user_service.isAuth=true;
  }



  ///pas de compte la  boite de dialogue pour la creation de compte
  openCreationCompteDialog(): void {
    const dialogclo = this.dialog.closeAll();
    const dialogRef = this.dialog.open(UserCreateCompteComponent, {
      width: '1000px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.animal = result;
    });
  }

 
  



  //mots de passe oublié la boite de dialogue pour la recuperation du password

  openRecuperationDialog(): void {
    const dialogclo = this.dialog.closeAll();
    const dialogRef = this.dialog.open(RecuperationCompteComponent, {
      width: '1000px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
