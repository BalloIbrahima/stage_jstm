import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-dialog-deconnect',
  templateUrl: './dialog-deconnect.component.html',
  styleUrls: ['./dialog-deconnect.component.scss']
})
export class DialogDeconnectComponent implements OnInit {
  icone_user:string=""

  constructor(public router:Router,private active_route:ActivatedRoute,public dialog: MatDialog,public user_service: UserServiceService) { }

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
    // this.router.navigate(['mon_compte']);

  }

  deconnect(): void{
    this.user_service.isAuth=false
    this.user_service.my_compte_open=false;
    this.user_service.page_mon_compte=true;
    localStorage.removeItem("person");
    localStorage.clear();

    this.router.navigate(['./../jstm'])
    this.user_service.page_mon_compte=false
    
    const dialogclo = this.dialog.closeAll();

  }

  // if(this.user_service.my_compte_open==true){
  //       this.router.navigate(['../jstm/mon_compte']);
  //       console.log(this.router.getCurrentNavigation.name)
  //     }else if(this.user_service.my_compte_open==false){
  //       if(this.user_service.page_mon_compte==true){
  //         this.router.navigate(['../jstm'])
  //         this.user_service.page_mon_compte=false
  //       }
  //     }

}
