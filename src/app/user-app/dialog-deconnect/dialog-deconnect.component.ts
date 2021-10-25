import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-dialog-deconnect',
  templateUrl: './dialog-deconnect.component.html',
  styleUrls: ['./dialog-deconnect.component.scss']
})
export class DialogDeconnectComponent implements OnInit {
  icone_user:string=""

  constructor(private router:Router,public dialog: MatDialog,public user_service: UserServiceService) { }

  ngOnInit(): void {
    if (this.user_service.utilisateur.imgPath==""){
      this.icone_user="assets/img/avatar.svg"
    }else{
      this.icone_user=this.user_service.utilisateur.imgPath
    }
  }

  open_mycompte(): void{
    const dialogclo = this.dialog.closeAll();
    this.user_service.my_compte_open=true;
    this.user_service.page_mon_compte=true;
  }

  deconnect(): void{
    this.user_service.isAuth=false
    this.user_service.my_compte_open=false;
    this.user_service.page_mon_compte=true;
    localStorage.removeItem("person");
    localStorage.clear();

    const dialogclo = this.dialog.closeAll();

  }

}
