import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleService } from '../services/article/article.service';
import { JstmTvService } from '../services/jstm_tv/jstm-tv.service';
import { UserServiceService } from '../services/user_service/user-service.service';
import { UserAuthentificationComponent } from './user-authentification.component';
import { UserCreateCompteComponent } from './user-create-compte/user-create-compte.component';


const routes: Routes = [
  { 
    path: 'user_connexion',  
    component:UserAuthentificationComponent,
    pathMatch:"full"
    
  },
  { 
    path: 'user_createCompte',  
    component:UserCreateCompteComponent,
    pathMatch:"full"
    
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [JstmTvService,ArticleService,UserServiceService],

})
export class UserAuthentificationRoutingModule { }
