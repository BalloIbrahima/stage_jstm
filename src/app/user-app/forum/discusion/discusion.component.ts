import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  id:number;
  
  private subscription:Subscription;                                     

  constructor(private router:Router, public user_service:UserServiceService,public sujetservice:SujetService,public messageservice:MessageService ,public route : ActivatedRoute,public spinner : NgxSpinnerService) { }
  ngOnInit(): void {
    // setTimeout(()=>{
    //   this.spinner.hide();
    // },3000)
    const id = history.state.id; //this.route.snapshot.params['id'];
    this.id=history.state.id;

    this.messageservice.addVue({
      'idVue':null,
      'date':'',
      'article':null,
      'sujet':this.sujetservice.sujetby(this.id)
    }).subscribe(res=>{})

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
      'sujet':this.sujetservice.sujetby(this.id),
      'user':this.user_service.utilisateur,
      'admin':null,
    }
    console.log(messags)
    this.messageservice.creation_message(messags).subscribe(res=>{
      this.retour_requete=res;
      console.log(this.retour_requete.message)
      if(this.retour_requete.message=='create'){
        console.log("create")
        form.resetForm()
      }

    })
   
  }
 
 
  getAllMessages(id:any){
    const params=this.getRequestParams(this.page,this.pageSize)
    this.messageservice.sujet_de(id,params).subscribe(res=>{

      this.maxS=res.data.totalPages
      if(this.all_message.length==0){
        this.reponse_sujet=res
        this.all_message=res.data.messages
        this.count=res.data.totalItms
      }else if((this.reponse_sujet.data.totalItms < res.data.totalItms)||this.reponse_sujet.data.currentPage != res.data.currentPage){
        this.all_message=res.data.messages

        this.reponse_sujet.data.currentPage =res.data.currentPage
      }
    })
  }

  handlePageChange(event:number):void{
    this.page=event;
  }

  il_ya(date_back:Date){
    var date=new Date();
    var today_date= date.getFullYear()+'-'+ date.getMonth()+1+'-'+date.getDay()
    var today_hours=date.getHours()+':'+date.getMinutes+':'+date.getSeconds()
    let sql_date=new Date(date_back)
    
    var datetime=today_date+'T '+today_hours
    // var datetime=date.toLocaleString()
    let date2=new Date()

    // date_table=this.dateDiff(sql_date,date)
    
    return this.dateDiff(sql_date,date);
  }


  dateDiff(date1:any , date2:any){
    
    var diff:any = {} ;                          // Initialisation du retour
    var tmp = date2 - date1;

    tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
    diff.sec = tmp % 60;                    // Extraction du nombre de secondes
 
    tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
    diff.min = tmp % 60;                    // Extraction du nombre de minutes
 
    tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
    diff.hour = tmp % 24;                   // Extraction du nombre d'heures
     
    tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
    diff.day = tmp;

    if (diff.day==0){
      if(diff.hour==0){
        if(diff.min==0){
          return "A l'instant "
        }else{
          if(diff.min>1){
            return "Il y'a "+ diff.min +' minutes'
        
          }else{
            return "Il y'a "+ diff.min +' minute'
        
          }
        }
      }else{
        if(diff.hour>1){
          return "Il y'a "+ diff.hour +' heures'
        }else{
          return "Il y'a "+ diff.hour +' heure'
        }
      }

    }else{
      if(diff.day>30){
        return "Il y'a "+ date1
      }else if(diff.day>1){
        return "Il y'a "+ diff.day +' jours'
      }
      else{
        return "Il y'a "+ diff.day +' jour'
      }
    }  
  }

  ngOnDestroy(){
    this.subscription.unsubscribe;
  }
}


