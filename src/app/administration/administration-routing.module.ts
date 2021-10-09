import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent} from './administration.component';


import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminArticleComponent } from './admin-article/admin-article.component';
import { AdminMagasineComponent } from './admin-magasine/admin-magasine.component';
// import { AdminPubliciteComponent } from './admin-publicite/admin-publicite.component';
import { AdminMoncompteComponent } from './admin-moncompte/admin-moncompte.component';
import { MesArticlesComponent } from './admin-article/mes-articles/mes-articles.component';
import { FormulaireArticleComponent } from './admin-article/formulaire-article/formulaire-article.component';
import { FormulaireMagasineComponent } from './admin-magasine/formulaire-magasine/formulaire-magasine.component';
import { MesMagasinesComponent } from './admin-magasine/mes-magasines/mes-magasines.component';
import { LecteurComponent } from './lecteur/lecteur.component';
import { NosLecteursComponent } from './lecteur/nos-lecteurs/nos-lecteurs.component';
import { GestionAdminsComponent } from './gestion-admins/gestion-admins.component';
import { ListeAdminsComponent } from './gestion-admins/liste-admins/liste-admins.component';
import { AllCommentairesComponent } from './Commentaire/all-commentaires/all-commentaires.component';
import { AllMagazinesComponent } from './admin-magasine/all-magazines/all-magazines.component';
import { AllArticlesComponent } from './admin-article/all-articles/all-articles.component';
// import { SuperadminLoginComponent } from './superadmin-login/superadmin-login.component';

export const routes: Routes = [
  {
    path:'admin',
    component:AdministrationComponent,
    children:[
      {
        path:'home',
        component:AdminHomeComponent,
        children:[
          {
            path:'commentaires',
            component:AllCommentairesComponent,
          },
          {
            path:'nosMagasines',
            component:AllMagazinesComponent
          },
          {
            path:'nosArticles',
            component:AllArticlesComponent
          }
        ]
      },
      {
        path:'article',
        component:AdminArticleComponent,
        children:[
          {
            path:'mes_articles',
            component:MesArticlesComponent,
          },
          {
            path:'formulaire_article',
            component:FormulaireArticleComponent,
          },
        
          {
            path:'',
            redirectTo:'mes_articles',
            pathMatch:'full'
          },
    
          // {
          //   path:'**',
          //   redirectTo:'home',
          //   pathMatch:'full'
          // }
    
    
        ]
      },
      
      {
        path:'magazine',
        component:AdminMagasineComponent,
        children:[
          {
            path:'mes_magazines',
            component:MesMagasinesComponent,
          },
          {
            path:'formulaire_magazine',
            component:FormulaireMagasineComponent,
          },
        
          {
            path:'',
            redirectTo:'mes_magazines',
            pathMatch:'full'
          },
    
          // {
          //   path:'**',
          //   redirectTo:'home',
          //   pathMatch:'full'
          // }
    
    
        ]
      },
      // {
      //   path:'publicite',
      //   component:AdminPubliciteComponent,
      // },
      {
        path:'moncompte',
        component:AdminMoncompteComponent,
      },
      // {
      //   path:'super_login',
      //   component:SuperadminLoginComponent,
      // },
      // {
      //   path:'super_admin_home',
      //   component:SuperadminHomeComponent,
      // },
     
      //gestion lecteurs
      {
        path:'gestion_lecteur',
        component:LecteurComponent,
        children:[
          {
            path:'nos_lecteurs',
            component:NosLecteursComponent,
          },
          {
            path:'',
            redirectTo:'nos_lecteurs',
            pathMatch:'full'
          },
        ]

      },

      //gestion admins
      {
        path:'gestion_admins',
        component:GestionAdminsComponent,
        children:[
          {
            path:'les_admins',
            component:ListeAdminsComponent,
          },
          {
            path:'',
            redirectTo:'les_admins',
            pathMatch:'full'
          },
        ]

      },

      // 

      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },

      // {
      //   path:'**',
      //   redirectTo:'home',
      //   pathMatch:'full'
      // }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
