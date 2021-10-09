import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.scss']
})
export class MonCompteComponent implements OnInit {

  constructor(private router:Router,public dialog: MatDialog,   public user_service: UserServiceService) { }

  ngOnInit(): void {

    if(this.user_service.isAuth==false){
        this.router.navigate(['../jstm'])
    }
    
  }

}
