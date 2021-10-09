import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthentificationComponent } from './admin-authentification.component';


const routes: Routes = [



  { 
    path: 'jstm_admin',  
    component:AdminAuthentificationComponent,
    pathMatch:'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminAuthentificationRoutingModule { }
