import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArticleService } from 'src/app/services/article/article.service';
import { UserAuthentificationComponent } from 'src/app/user-authentification/user-authentification.component';
import * as $ from 'jquery';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';
import { DialogDeconnectComponent } from './../../dialog-deconnect/dialog-deconnect.component';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

declare var require : any;
const FileSaver = require('file-saver');
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit , OnDestroy{

  @Output() public sidenavClose=new EventEmitter();


  sticky: boolean = false;
  elementPosition: any;
  Is_Auth=false;
  default_user_img="default_user_img";
  


  drapeau:string="./assets/icones/drapeau.jpg";
  icone:string='assets/icones/icone.png';
  icone_court:string="assets/icones/jstm_court.png";
  icone_user:string="assets/icones/user_name.png";

  subscription:Subscription;
  compte_sans_img="";
  nomC:any;
  tableau_img:any;
  
  ngOnInit(): void {
    $('#staticBackdrop1').appendTo('body');
    // if (this.user_service.utilisateur.imgPath==""){
    //   this.icone_user="assets/img/avatar.svg"
    // }else{
    //   this.icone_user=this.user_service.utilisateur.imgPath
    // }
    this.subscription=interval(1000).subscribe(
      (val)=>{
        this.connected()
      }
    )

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

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
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
