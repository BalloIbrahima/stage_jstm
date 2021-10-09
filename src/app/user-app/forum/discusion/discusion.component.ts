import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { interval, Observable, Subscription } from 'rxjs';
import { MessageService } from 'src/app/services/blog/message.service';
import { SujetService } from 'src/app/services/blog/sujet.service';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';
import { getGeneratedNameForNode } from 'typescript';

@Component({
  selector: 'app-discusion',
  templateUrl: './discusion.component.html',
  styleUrls: ['./discusion.component.scss']
})

export class DiscusionComponent implements OnInit,OnDestroy {
  sujet:any;
  chat:any;
  subject:any;
  titre:any;
  my_title:any;
  message:any;
  retour_requete:any;
  retour_auteur:any;
  all_message:any[]=[];
  nbr_table:any[]=[];

  reponse_sujet:any;
  auteur:any;
  counter:Subscription;               
  nomC="";
  compte_sans_img="";   
  // concernant la pagination
  page=1;
  count=0;
  pageSize=5;
  maxS=3;

  private subscription:Subscription;                                     

  constructor(public user_service:UserServiceService,public sujetservice:SujetService,public messageservice:MessageService ,public route : ActivatedRoute,public spinner : NgxSpinnerService) { }
  ngOnInit(): void {
    // setTimeout(()=>{
    //   this.spinner.hide();
    // },3000)
    const id = this.route.snapshot.params['id'];
    //  detarmination du titre
    this.subscription=interval(1000).subscribe(
      (val)=>{
        this.getAllMessages(id)
      }
    )

  
    // if(this.all_message.length>3){
    //   this.spinner.hide()
    // }

  

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

  //verification  et attribution d'une photo au lecteur
  imageLecteur(nom_user:any){
    //verification si la photo de profil est vide et lui donner un nom a la place 
  
        this.nomC=nom_user.split(" ")
      //
        try{
          this.compte_sans_img=this.nomC[0][0]+this.nomC[1][0]

        }catch{
          this.compte_sans_img=this.nomC[0][0]+this.nomC[0][1]
        }

        return this.compte_sans_img

  }

  // poste du message
  posterMessage(form:NgForm){

    this.message=form.value['message'];
    const messags={
      'idMessage':null,
      'text':this.message,
      'date':'',
      'sujet':this.sujetservice.sujetby(this.route.snapshot.params['id']),
      'user':this.user_service.utilisateur,
      'admin':null,
    }
    console.log(messags)
    this.messageservice.creation_message(messags).subscribe(res=>{
      this.retour_requete=res;
      console.log(this.retour_requete.message)
      if(this.retour_requete.message=='succes'){
        this.messageservice.messages=this.retour_requete.data;
        console.log("create")
        //on doit actualiser la page après
        // pour sa on doit faire appel à ngOninit

        // ---------------
      }

    })
   
  }
 
 
  getAllMessages(id:any){
    const params=this.getRequestParams(this.page,this.pageSize)
    this.messageservice.sujet_de(id,params).subscribe(res=>{
      // console.log(params)
      // console.log(res.data.messages)
      this.maxS=res.data.totalPages
      if(this.all_message.length==0){
        this.reponse_sujet=res
        this.all_message=res.data.messages
        this.count=res.data.totalItms
      }else if((this.reponse_sujet.data.totalItms < res.data.totalItms)||this.reponse_sujet.data.currentPage != res.data.currentPage){
        this.all_message=res.data.messages

        this.reponse_sujet.data.currentPage =res.data.currentPage
        
        // for (let index = this.reponse_sujet.data.lenght; index < res.data.messages.length; index++) {
          
        //   // this.all_message.push(res.data.messages[index]) ;        
        // }
      }
    })
  }

  handlePageChange(event:number):void{
    this.page=event;
  }


  

  
  


  discussion=[
    {
      id:1,
      text:"slut tout le monde moi c'est Diallo Aboubacar Mohamed",
      id_createur:"1236",
      id_sujet:3,

    },
    {
      id:2,
      text:"slut tout le monde moi c'est Diallo Ballo Ibrahima",
      id_createur:1234,
      id_sujet:1,

    },
    {
      id:3,
      text:"slut tout le monde moi c'est Ballo Mohamed",
      id_createur:1237,
      id_sujet:4,
    },
    {
      id:4,
      text:"slut tout le monde moi c'est Konake Adama",
      id_sujet:2,
      id_createur:1235,

    },
    // 
    {
      id:1,
      text:"commen sa va man tu vas b1",
      id_createur:1234,
      id_sujet:1,

    },
    {
      id:2,
      text:"Wai broooo sa roule",
      id_createur:1235,
      id_sujet:3,

    },
    {
      id:3,
      text:"slut brooooooooooooo bllo cc",
      id_createur:1236,
      id_sujet:4,
    },
    {
      id:4,
      text:"yaii good morning how are you???",
      id_sujet:2,
      id_createur:1237,

    },
    // 
    {
      id:2,
      text:"rebonjour a tout un chacunnn",
      id_createur:"1236",
      id_sujet:3,

    },
    {
      id:3,
      text:"ayuuu  cc Diallo Ballo Ibrahima",
      id_createur:1234,
      id_sujet:1,

    },
    {
      id:1,
      text:"yoo les mannn cc ",
      id_createur:1237,
      id_sujet:4,
    },
    {
      id:4,
      text:"cc les gas  la matine",
      id_sujet:2,
      id_createur:1235,

    },

  ]



  utilisateurs=[
    {
      id:1234,
      nom_complet:"Ballo Ibrahima",
      image:"assets/img/mike.jpg"

    },
    {
      id:1235,
      nom_complet:"KONAKE Adama",
      image:"assets/img/ex1.jpg"

    },
    {
      id:1236,
      nom_complet:"Diallo Aboubacar",
      image:"assets/img/ex1.jpg"

    },
    {
      id:1237,
      nom_complet:"Ballo Mohamed",
      image:"assets/img/mike.jpg"

    },
  ]

  sujets=[
    {
      id:1,
      id_createur:1234,
      tire:"Le fonio est un patatè patata azertyuiopNQUI A DES patati patata",
      rubrique:"Agriculture",
      categorie:"Mali",
      date_creation:"12/12/2019",

    },

    {
      id:2,
      id_createur:1235,
      tire:"L'art de la culture Africaine ",
      rubrique:"Environnement",
      categorie:"Afrique",
      date_creation:"12/12/2020",

    },

    {
      id:3,
      id_createur:1236,
      tire:"La disparition des poissons",
      rubrique:"Environnement",
      categorie:"Mali",
      date_creation:"12/02/2012",

    },
    {
      id:4,
      id_createur:1237,
      tire:"Le Covid 19 et les maliens",
      rubrique:"Sante",
      categorie:"Mali",
      date_creation:"12/12/2021",

    },
  ]
  ngOnDestroy(){
    this.subscription.unsubscribe;
  }
}


