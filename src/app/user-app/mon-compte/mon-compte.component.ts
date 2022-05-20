import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
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
  styleUrls: ['./mon-compte.component.scss'],
  
})
export class MonCompteComponent implements OnInit, OnDestroy{

  icone_user:string="assets/icones/user_name.png";

  subscription:Subscription;
  compte_sans_img="";
  nomC:any;
  tableau_img:any;
  constructor(private router:Router,public dialog: MatDialog,private active_route:ActivatedRoute,   public user_service: UserServiceService) { }

  ngOnInit(): void {
    try{
      this.user_service.utilisateur.imgPath
      this.subscription=interval(1000).subscribe(
        (val)=>{
          this.connected()
        }
      )
    }catch{
      this.router.navigate(['../'],{relativeTo:this.active_route})

        
    }
    
    

  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
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
