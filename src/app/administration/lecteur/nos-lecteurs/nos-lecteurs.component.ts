import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';

@Component({
  selector: 'app-nos-lecteurs',
  templateUrl: './nos-lecteurs.component.html',
  styleUrls: ['./nos-lecteurs.component.scss']
})
export class NosLecteursComponent implements OnInit {

  Lecteur:any;
  Lecteurs:any;
  retour_lectueur:any;
  constructor(public  lecteur:UserServiceService){ }

  ngOnInit(): void {

    //recuperation de la liste des lecteurs
    this.lecteur.Nos_lecteurs().subscribe(res=>{
      this.retour_lectueur=res;
      this.Lecteurs=this.retour_lectueur.data;

    })


  }

}
