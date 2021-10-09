import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminLoginService } from 'src/app/services/admin_login/admin-login.service';

@Component({
  selector: 'app-modifier-password',
  templateUrl: './modifier-password.component.html',
  styleUrls: ['./modifier-password.component.scss']
})
export class ModifierPasswordComponent implements OnInit {

  password="";
  password_verif="";
  ancien_password="";
  reponse_admin:any;
  invalid:boolean;
  ancien_pass:boolean;
  pass_incorrect:boolean;


  constructor(public router:Router, public dialog: MatDialog,private spinner : NgxSpinnerService,private admin_service:AdminLoginService) { }

  ngOnInit(): void {
    this.spinner.hide()
  }

  onSubmit(form:NgForm){
    this.spinner.show()
    this.ancien_password=form.value['ancien_password']
    this.password=form.value['password']
    this.password_verif=form.value['verif_password']

    if(this.ancien_password!=this.admin_service.admin.mot_de_passe){
        this.ancien_pass=true;
    }else{
      if(this.password!=this.password_verif){
        this.pass_incorrect=true;
      }else{

        const admin=[{
          idAdmin:this.admin_service.admin.id,
          password:this.password
    
            
        }]
        // determination s'il est super Admin ou pas
          // this.super_admin=form.value[]
          this.admin_service.Password_review(admin).subscribe(res=>{
            if(res.type===HttpEventType.UploadProgress){
            
            }else if(res instanceof HttpResponse){
              this.reponse_admin=res;
              if(this.reponse_admin.message="valid"){
                this.admin_service.admin=this.reponse_admin.data
                // alert("Compte créer avec succes !")
                this.router.navigate(['../../jstm_admin'])
                this.spinner.hide()
    
              }else{
                this.invalid=true
                this.spinner.hide()
              }
            }
          })
    

      }
    }
    
  }
}
