import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArticleService } from 'src/app/services/article/article.service';
import { UserAuthentificationComponent } from 'src/app/user-authentification/user-authentification.component';
import * as $ from 'jquery';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';
import { DialogDeconnectComponent } from './../../dialog-deconnect/dialog-deconnect.component';
import { Router } from '@angular/router';

declare var require : any;
const FileSaver = require('file-saver');
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  @Output() public sidenavClose=new EventEmitter();


  sticky: boolean = false;
  elementPosition: any;
  Is_Auth=false;
  compte_sans_img="IB";
  default_user_img="default_user_img";
  


  drapeau:string="./assets/icones/drapeau.jpg";
  icone:string='assets/icones/icone.png';
  icone_court:string="assets/icones/jstm_court.png";
  icone_user:string="assets/icones/user_name.png";

  ngOnInit(): void {
    $('#staticBackdrop1').appendTo('body');

  }



  openDialog(): void {
    this.sidenavClose.emit();
    const dialogRef = this.dialog.open(UserAuthentificationComponent, {
      width: '1000px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }

  deconnectDialog(utilisateur:any): void{
    this.sidenavClose.emit();
    const dialog_deconnect=this.dialog.open(DialogDeconnectComponent, 
      {position: {top: '1%', right:'5%'},
      data:utilisateur
    });

    dialog_deconnect.afterClosed().subscribe(result => {
      if(this.user_service.my_compte_open==true){
        this.router.navigate(['../jstm/mon_compte']);
        console.log(this.router.getCurrentNavigation.name)
      }else if(this.user_service.my_compte_open==false){
        if(this.user_service.page_mon_compte==true){
          this.router.navigate(['../jstm'])
          this.user_service.page_mon_compte=false
        }
      }
    
    });

  }




  constructor(private router:Router,public dialog: MatDialog,   public user_service: UserServiceService,private apiServicem : ArticleService) {



    window.addEventListener("scroll",()=>{
        const  nav_scroll=document.querySelector('.titre')
        const  toggle=document.querySelector('.toggle_app')

      if(window.scrollY >= 78){
        toggle?.classList.add('toggle_apparait')  
        toggle?.classList.remove('d-none')  


      }
      else if(window.scrollY <= 78){
        
      
        toggle?.classList.remove('toggle_apparait')  
        toggle?.classList.remove('d-none')  



      }
    })


  }



//larrivée des magazines 

  magazines = [
    {
      "nom" : "JSTM_MAG_N_28",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_28.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/jstm_28.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_29",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_29.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/JSTM-29.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_28",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_29.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/jstm_29.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_29",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_28.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/JSTM-28.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_28",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_28.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/jstm_28.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_29",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_29.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/JSTM-29.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_28",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_29.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/jstm_29.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_29",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_28.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/JSTM-28.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_28",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_28.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/jstm_28.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_29",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_29.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/JSTM-29.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_29",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_29.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/JSTM-29.pdf"
    },
    {
      "nom" : "JSTM_MAG_N_29",
      "image" : "http://localhost/jstm/magazines/photos/JSTM_MAG_N_28.JPG",
      "fichier" : "http://localhost:80/jstm/magazines/pdf/JSTM-28.pdf"
    }
  ]


  public onSidenavClose=()=>{
    this.sidenavClose.emit();
  }

}
