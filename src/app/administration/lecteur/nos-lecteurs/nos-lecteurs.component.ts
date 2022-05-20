import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminLoginService } from 'src/app/services/admin_login/admin-login.service';
import { UserServiceService } from 'src/app/services/user_service/user-service.service';

@Component({
  selector: 'app-nos-lecteurs',
  templateUrl: './nos-lecteurs.component.html',
  styleUrls: ['./nos-lecteurs.component.scss']
})
export class NosLecteursComponent implements OnInit {

  Lecteurs:any;
  retour_lectueur:any;
  constructor(private active_route:ActivatedRoute,private router:Router,public admin_service:AdminLoginService, public  lecteur:UserServiceService) { }


  ngOnInit(): void {

    if(!this.admin_service.admin.superAdmin){
      this.router.navigate(['../'],{relativeTo:this.active_route})

    }
    //recuperation de la liste des lecteurs
    this.lecteur.Nos_lecteurs().subscribe(res=>{
      this.retour_lectueur=res;
      this.Lecteurs=this.retour_lectueur;

    })


  }

}
