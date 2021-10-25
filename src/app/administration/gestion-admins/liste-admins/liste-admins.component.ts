import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminLoginService } from 'src/app/services/admin_login/admin-login.service';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';
import { AddAdminComponent } from '../add-admin/add-admin.component';

@Component({
  selector: 'app-liste-admins',
  templateUrl: './liste-admins.component.html',
  styleUrls: ['./liste-admins.component.scss']
})
export class ListeAdminsComponent implements OnInit {

  Admin:any;
  Les_Admins:any;
  retour_admin:any;
  constructor(public  lecteur:UserServiceService,public  admin:AdminLoginService,public dialog: MatDialog,){ }

  ngOnInit(): void {

    //recuperation de la liste des lecteurs
    this.admin.AllAdmin().subscribe(res=>{
      this.retour_admin=res;
      this.Les_Admins=this.retour_admin.data;

    })
  }

  // change nom complet
  add_admin(): void {
    const dialogRef = this.dialog.open(AddAdminComponent, {
      width: '500px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }

}
