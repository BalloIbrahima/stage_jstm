import { CUSTOM_ELEMENTS_SCHEMA, NgModule, ViewChildren } from '@angular/core';
import { ChildActivationStart, RouterModule, Routes } from '@angular/router';
import { UserAppComponent} from './user-app.component';

import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { AdministrationComponent } from '../administration/administration.component';
import { JstmTvComponent } from './jstm-tv/jstm-tv.component';
import { MagasineComponent } from './magasine/magasine.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { AgricultureNationaleComponent } from './actu_science_nationale/agriculture-nationale/agriculture-nationale.component';
import { SanteNationaleComponent } from './actu_science_nationale/sante-nationale/sante-nationale.component';
import { EnvironnementeNationaleComponent } from './actu_science_nationale/environnemente-nationale/environnemente-nationale.component';
import { TechnologieNationaleComponent } from './actu_science_nationale/technologie-nationale/technologie-nationale.component';
import { EducationNationaleComponent } from './actu_science_nationale/education-nationale/education-nationale.component';
import { SocieteNationaleComponent } from './actu_science_nationale/societe-nationale/societe-nationale.component';
import { AgricultureInternationaleComponent } from './actu_science_internationale/agriculture-internationale/agriculture-internationale.component';
import { InnovationInternationaleComponent } from './actu_science_internationale/innovation-internationale/innovation-internationale.component';
import { EnvironnementInternationaleComponent } from './actu_science_internationale/environnement-internationale/environnement-internationale.component';
import { PortraitsComponent } from './nos_scientifiques/portraits/portraits.component';
import { OpinionsComponent } from './nos_scientifiques/opinions/opinions.component';
import { EditoComponent } from './nos_scientifiques/edito/edito.component';
import { OffresComponent } from './offres/offres.component';
import { ForumAcceuilComponent } from './forum/forum-acceuil/forum-acceuil.component';
import { ActuScienceNationaleComponent } from './actu_science_nationale/actu-science-nationale.component';
import { ActuScienceInternationaleComponent } from './actu_science_internationale/actu-science-internationale.component';
import { NosScientifiquesComponent } from './nos_scientifiques/nos-scientifiques.component';
import { ForumComponent } from './forum/forum.component';
import { DiscusionComponent } from './forum/discusion/discusion.component';
import { CreerSujetComponent } from './forum/creer-sujet/creer-sujet.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { SearchComponent } from './search/search.component';

const user_routes: Routes = [
    // {
    //     path:'jstm',
    //     redirecto:'jstm/home'
    // }
  {
    path:'jstm',
    component:UserAppComponent,
    children: [
      {path:'home',component:HomeComponent},
      {path:'magazine',component:MagasineComponent,},
      // {path:'sante_medecine',component:SanteMedecineComponent},
      {path:'a_propos', component:AProposComponent},
      {path: 'jstm_tv', component:JstmTvComponent},
      {path:'mon_compte', component:MonCompteComponent},
      {path:'detail-article/:id', component:DetailArticleComponent},
      //actu science nationale
      {path:'actu_science_nationale',
        children:[
          {path:'agriculture', component:AgricultureNationaleComponent},
          {path:'sante',component:SanteNationaleComponent},
          {path:'environnement', component:EnvironnementeNationaleComponent},
          {path:'technologie', component:TechnologieNationaleComponent},
          {path:'education', component:EducationNationaleComponent},
          {path:'societe', component:SocieteNationaleComponent}

        ]
      },
      //actu science internationale
      {path:'actu_science_internationale',
        children:[
          {path:'agriculture', component:AgricultureInternationaleComponent},
          {path:'innovation',component:InnovationInternationaleComponent},
          {path:'environnement', component:EnvironnementInternationaleComponent},
        ]
      },

      //actu science internationale
      {path:'nos_scientifiques',
        children:[
          {path:'portraits', component:PortraitsComponent},
          {path:'opinions',component:OpinionsComponent},
          {path:'edito', component:EditoComponent},
        ]
      },

      {path:'offres', component:OffresComponent},
      //actu science internationale
      {path:'forum',
      component:ForumComponent,
        children:[
          {path:'', redirectTo:'acceuil', pathMatch:'full'},
          {path:'acceuil', component:ForumAcceuilComponent},
          {path:'chat/:id', component:DiscusionComponent},
          {path:'creer_un_sujet', component:CreerSujetComponent}
          
        ]
      },
      {
        path:'search/:text',
        component:SearchComponent
      },
      
      {path:'', redirectTo:'home',pathMatch:'full'},
      // { path: '**', redirectTo:'home',pathMatch:'full'}
    ]
  },
  

  // {
  //   path:'admin',
  //   redirectTo:'admin', 
  //   pathMatch:'full'
  // },
  // {
  //   path:'**',
  //   redirectTo:'jstm',
  //   pathMatch:'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(user_routes),
  ],
  exports: [RouterModule]
})
export class UserappRoutingModule { }



