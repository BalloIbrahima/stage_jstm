import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
