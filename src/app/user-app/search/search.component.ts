import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { interval, Subscription } from 'rxjs';
import { MessageService } from 'src/app/services/blog/message.service';
import { SujetService } from 'src/app/services/blog/sujet.service';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private subscription:Subscription;                                     
  resultat:any;

  constructor(public user_service:UserServiceService,public sujetservice:SujetService,public messageservice:MessageService ,public route : ActivatedRoute,public spinner : NgxSpinnerService) { }
  
  ngOnInit(): void {
    // recuperation du  text saisie
    const text = this.route.snapshot.params['text'];
    // la fonction de recherche en temps reél

    this.subscription=interval(1000).subscribe(
      (val)=>{
        this.recherche(text)
      }
    )



  }


  recherche(text:string){

  }

  ngOnDestroy(){
    this.subscription.unsubscribe;
  }
}
