import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { NgxSpinnerService } from 'ngx-spinner';
import { interval, Subscription } from 'rxjs';
import { MessageService } from 'src/app/services/blog/message.service';
import { SujetService } from 'src/app/services/blog/sujet.service';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';


@Component({
  selector: 'app-forum-acceuil',
  templateUrl: './forum-acceuil.component.html',
  styleUrls: ['./forum-acceuil.component.scss']
})
export class ForumAcceuilComponent implements OnInit, OnChanges ,OnDestroy{

  // type utilisateur=Array<{id:number,nom_complet:any,image:any}>;
  user_name:any;
  user_tof:any;
  sujets:any[]=[];
  retour_sujet:any;
  titreSujet:"";
  placeSujetImg="";

  page=1;
  count=0;
  pageSize=5;
  maxS:any;
  nbr_table:any[]=[];
  nbr_vue:any[]=[];

  private subscription:Subscription;                                     
  constructor(public user_service:UserServiceService,public sujet_service:SujetService,public messageservice:MessageService ,public route : ActivatedRoute,public spinner : NgxSpinnerService) { }


  ngOnChanges(changes: SimpleChanges): void {
    
    // function recherche($scope:any){
    //   en_recherche=false;

    //   if($scope.searchBox.length!=0) en_recherche=true; 
    //   else en_recherche=true

    // }
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    
   this.subscription=interval(1000).subscribe(
      (val)=>{
        this.getAllsubject()
      }
    )
    // var date=new Date()
    // console.log( date.toLocaleString()    )
    
  }
  getRequestParams(page:number,pageSize:number):any{
    let params:any={}
    if(page){
      params['page']=page-1;
    }

    if(pageSize){
      params['size']=pageSize;
    }
    return params
  }

  
  
  // une tofa la place du photo
  imageForum(titre:any){
    const nomC=titre.split(" ")
      //
        try{
          this.placeSujetImg=nomC[0][0]+nomC[1][0]

        }catch{
          this.placeSujetImg=nomC[0][0]+nomC[0][1]
        }

        return this.placeSujetImg
      }
  
  // utilisateurs=[
  //   {
  //     id:1234,
  //     nom_complet:"Ballo Ibrahima",
  //     image:"assets/img/mike.jpg"

  //   },
  //   {
  //     id:1235,
  //     nom_complet:"KONAKE Adama",
  //     image:"assets/img/ex1.jpg"

  //   },
  //   {
  //     id:1236,
  //     nom_complet:"Diallo Aboubacar",
  //     image:"assets/img/ex1.jpg"

  //   },
  //   {
  //     id:1237,
  //     nom_complet:"Ballo Mohamed",
  //     image:"assets/img/mike.jpg"

  //   },
  // ]


  // sujets=[
  //   {
  //     id:1,
  //     id_createur:1234,
  //     tire:"Le fonio est un patatè patata azertyuiopNQUI A DES patati patata",
  //     rubrique:"Agriculture",
  //     categorie:"Mali",
  //     date_creation:"12/12/2019",

  //   },

  //   {
  //     id:2,
  //     id_createur:1235,
  //     tire:"L'art de la culture Africaine ",
  //     rubrique:"Environnement",
  //     categorie:"Afrique",
  //     date_creation:"12/12/2020",

  //   },

  //   {
  //     id:3,
  //     id_createur:1236,
  //     tire:"La disparition des poissons",
  //     rubrique:"Environnement",
  //     categorie:"Mali",
  //     date_creation:"12/02/2012",

  //   },
  //   {
  //     id:4,
  //     id_createur:1237,
  //     tire:"Le Covid 19 et les maliens",
  //     rubrique:"Sante",
  //     categorie:"Mali",
  //     date_creation:"12/12/2021",

  //   },
  // ]

  handlePageChange(event:number):void{
    this.page=event;
  }



  getAllsubject(){
    const params=this.getRequestParams(this.page,this.pageSize)

    this.sujet_service.All_Sujet(params).subscribe(res=>{
      // console.log(res)

      this.maxS=res.data.totalPages
      
      if(this.sujets.length==0){
          this.retour_sujet=res;
            this.sujet_service.les_sujet=this.retour_sujet.data.sujets
            this.sujets=this.retour_sujet.data.sujets
            this.count=this.retour_sujet.data.totalItms;
          // this.sujets=this.sujet_service.les_sujet

          for(let index =0;res.data.sujets.length;index++){
            this.messageservice.nbreMessage(res.data.sujets[index].idSujet).subscribe(ress=>{
              this.nbr_table.push(ress);
  
            })
            this.messageservice.nbreVue(res.data.sujets[index].idSujet).subscribe(ress=>{
              this.nbr_vue.push(ress);
  
            })
          }
          
          
      }else if((this.retour_sujet.data.totalItms < res.data.totalItms)||this.retour_sujet.data.currentPage != res.data.currentPage){
            
          this.retour_sujet=res;
          this.sujet_service.les_sujet=res.data.sujets;
            this.sujets=this.sujet_service.les_sujet
            this.retour_sujet.data.currentPage =res.data.currentPage

            this.nbr_table=[];
            this.nbr_vue=[];

            for(let index =0;res.data.sujets.length;index++){
              this.messageservice.nbreMessage(this.retour_sujet.data.sujets[index].idSujet).subscribe(ress=>{
                this.nbr_table.push(ress);

              })
              this.messageservice.nbreVue(this.retour_sujet.data.sujets[index].idSujet).subscribe(ress=>{
                this.nbr_vue.push(ress);

              })
            }

      }
    })

  }


  ngOnDestroy(){
    this.subscription.unsubscribe;
  }
}
