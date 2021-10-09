import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from 'src/app/services/admin_login/admin-login.service';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';

@Component({
  selector: 'app-liste-admins',
  templateUrl: './liste-admins.component.html',
  styleUrls: ['./liste-admins.component.scss']
})
export class ListeAdminsComponent implements OnInit {

  Admin:any;
  Les_Admins:any;
  retour_admin:any;
  constructor(public  lecteur:UserServiceService,public  admin:AdminLoginService){ }

  ngOnInit(): void {

    //recuperation de la liste des lecteurs
    this.admin.AllAdmin().subscribe(res=>{
      this.retour_admin=res;
      this.Les_Admins=this.retour_admin.data;

    })
  }

}
