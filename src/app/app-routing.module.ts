import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthentificationComponent } from './admin-authentification/admin-authentification.component';
import { AdministrationComponent } from './administration/administration.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserAppComponent } from './user-app/user-app.component';

const routes: Routes = [
  {
    path:'not_found',
    component:NotFoundComponent,
  },
   {
    path:'admin',
    component:AdministrationComponent
  },  
   {
    path:'J_s_t_m',
    component:AdminAuthentificationComponent
  },    
   {
    path:'', 
    redirectTo:'jstm',
    pathMatch:'full'
  },
  // { 
  //   path: '**',  
  //   redirectTo:'not_found',
  //   component:AppComponent,
  //   pathMatch:'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
