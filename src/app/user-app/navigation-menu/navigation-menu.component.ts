import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArticleService } from 'src/app/services/article/article.service';
import { UserAuthentificationComponent } from 'src/app/user-authentification/user-authentification.component';
import * as $ from 'jquery';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';
import { DialogDeconnectComponent } from '../dialog-deconnect/dialog-deconnect.component';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

declare var require : any;
const FileSaver = require('file-saver');
@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit, OnDestroy {

  @Output() public sideNavToggle=new EventEmitter();


  sticky: boolean = false;
  elementPosition: any;
  Is_Auth=false;
  compte_sans_img="";
  default_user_img="default_user_img";
  ph="Ibrahima";
  nomC:any;
  tableau_img:any;


  drapeau:string="./assets/icones/drapeau.jpg";
  icone:string='assets/icones/icone.png';
  icone_court:string="assets/icones/jstm_court.png";
  icone_user:string="assets/icones/user_name.png";
  subscription:Subscription;
  ngOnInit(): void {
        $('#staticBackdrop1').appendTo('body');
        //verification si la photo de profil est vide et lui donner un nom a la place 
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

  public onToggleSideNav=() =>{
    this.sideNavToggle.emit();

  }


  openDialog(): void {
        const dialogRef = this.dialog.open(UserAuthentificationComponent, {
          width: '1000px',
          // data: {name: this.name, animal: this.animal}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          // this.animal = result;
        });
  }

  deconnectDialog(utilisateur:any): void{
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
    // console.log(this.nomC[0][0])

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
  currentMag = [
    {
      nom : '',
      fichier : ''
    }
  ];
  
  dernier_mag_img=this.magazines[this.magazines.length - 1].image;
  lastmag=this.magazines[this.magazines.length - 1]
  page : number = 1;
  allpage : number = 0 ;
  isLoaded : boolean | undefined;
  fichier : string = "http://localhost:80/jstm/magazines/pdf/jstm_28.pdf";
  pdfFile : any;

  

  onGetPdf(link : any) {
    if(link != null){
      this.apiServicem.downloadPdf(link).subscribe(response => {
        console.log(response);
        this.pdfFile = response;
      });
      const magazine = this.magazines.find((s)=>{
        return s.fichier === link;
      });
      if(magazine != null){
        this.currentMag[0].nom = magazine.nom;
        this.currentMag[0].fichier = magazine.fichier;
      }
    }else{
      this.page = 1;
      // $('#dernier_mag').click(function(){
      //   location.reload();
      // })
    }
    
  }

  onAfterLoadCompleted(pdfData: any){
    this.allpage = pdfData.pagesCount;
    this.isLoaded = true;
    console.log(this.allpage);
  }

  onDownloadPdfFile(pdfUrl : string, pdfName : string){
    this.subscription.unsubscribe;
  }
}
