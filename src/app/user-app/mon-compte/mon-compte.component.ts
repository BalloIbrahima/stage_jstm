import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';
import { UserAuthentificationComponent } from 'src/app/user-authentification/user-authentification.component';
import { EditEmailComponent } from './edit-email/edit-email.component';
import { EditFonctionComponent } from './edit-fonction/edit-fonction.component';
import { EditNomcompletComponent } from './edit-nomcomplet/edit-nomcomplet.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { EditPhotoComponent } from './edit-photo/edit-photo.component';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.scss']
})
export class MonCompteComponent implements OnInit {

  icone_user:string="assets/icones/user_name.png";

  constructor(private router:Router,public dialog: MatDialog,   public user_service: UserServiceService) { }

  ngOnInit(): void {
    if(this.user_service.isAuth==false){
        this.router.navigate(['../jstm'])
        // const dialogRef = this.dialog.open(UserAuthentificationComponent, {
        //   width: '1000px',
        //   // data: {name: this.name, animal: this.animal}
        // });
    
        // dialogRef.afterClosed().subscribe(result => {
        //   // this.animal = result;
        // });
    }else{
      if (this.user_service.utilisateur.imgPath==""){
        this.icone_user="assets/img/avatar.svg"
      }else{
        this.icone_user=this.user_service.utilisateur.imgPath
      }
    }
    
  }

  // change photo profil
  change_photo(): void {
    const dialogRef = this.dialog.open(EditPhotoComponent, {
      width: '500px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }

  // change nom complet
  change_nom_complet(): void {
    const dialogRef = this.dialog.open(EditNomcompletComponent, {
      width: '500px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }

  // change fonction
  change_fonction(): void {
    const dialogRef = this.dialog.open(EditFonctionComponent, {
      width: '500px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }

  // change email
  change_email(): void {
    const dialogRef = this.dialog.open(EditEmailComponent, {
      width: '500px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }

  // change password
  change_password(): void {
    const dialogRef = this.dialog.open(EditPasswordComponent, {
      width: '500px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }

}
