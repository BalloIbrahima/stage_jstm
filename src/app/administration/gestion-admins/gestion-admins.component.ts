import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminLoginService } from 'src/app/services/admin_login/admin-login.service';

@Component({
  selector: 'app-gestion-admins',
  templateUrl: './gestion-admins.component.html',
  styleUrls: ['./gestion-admins.component.scss']
})
export class GestionAdminsComponent implements OnInit {

  constructor(private active_route:ActivatedRoute,private router:Router,public admin_service:AdminLoginService) { }

  ngOnInit(): void {
    if(!this.admin_service.admin.superAdmin){
      this.router.navigate(['../'],{relativeTo:this.active_route})

    }
  }

}
