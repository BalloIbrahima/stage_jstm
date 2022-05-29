import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AdminLoginService } from 'src/app/services/admin_login/admin-login.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor( private adminService:AdminLoginService, private router:Router) { }

  ngOnInit(): void {

    if(!this.adminService.isAuth){
      this.router.navigate(['j_s_t_m'])
      //relativeTo:this.active_route
      console.log("execuerr")

    }
  }

}
