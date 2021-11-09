import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { NgxSpinnerModule } from 'ngx-spinner';


import { AdministrationComponent } from './administration.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminMoncompteComponent } from './admin-moncompte/admin-moncompte.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdminArticleComponent } from './admin-article/admin-article.component';
import { MesArticlesComponent } from './admin-article/mes-articles/mes-articles.component';
import { FormulaireArticleComponent } from './admin-article/formulaire-article/formulaire-article.component';
import { JstmTvService } from '../services/jstm_tv/jstm-tv.service';
import { ArticleService } from '../services/article/article.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AdminMagasineComponent } from './admin-magasine/admin-magasine.component';
import { FormulaireMagasineComponent } from './admin-magasine/formulaire-magasine/formulaire-magasine.component';
import { MesMagasinesComponent } from './admin-magasine/mes-magasines/mes-magasines.component';
import { UserServiceService } from '../services/user_service/user-service.service';
import { LecteurComponent } from './lecteur/lecteur.component';
import { NosLecteursComponent } from './lecteur/nos-lecteurs/nos-lecteurs.component';
import { GestionAdminsComponent } from './gestion-admins/gestion-admins.component';
import { ListeAdminsComponent } from './gestion-admins/liste-admins/liste-admins.component';
import { MesCommentairesComponent } from './Commentaire/mes-commentaires/mes-commentaires.component';
import { AllCommentairesComponent } from './Commentaire/all-commentaires/all-commentaires.component';
import { ModifierPasswordComponent } from './admin-moncompte/modifier-password/modifier-password.component';
import { AllArticlesComponent } from './admin-article/all-articles/all-articles.component';
import { AllMagazinesComponent } from './admin-magasine/all-magazines/all-magazines.component';
import { AddAdminComponent } from './gestion-admins/add-admin/add-admin.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { DialogFileComponent } from './admin-article/formulaire-article/dialog-file/dialog-file.component';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
  declarations: [
    AdministrationComponent,
    AdminHomeComponent,
    AdminMoncompteComponent,
    AdminArticleComponent,
    MesArticlesComponent,
    FormulaireArticleComponent,
    AdminMagasineComponent,
    MesMagasinesComponent,
    FormulaireMagasineComponent,
    LecteurComponent,
    NosLecteursComponent,
    GestionAdminsComponent,
    ListeAdminsComponent,
    AllCommentairesComponent,
    MesCommentairesComponent,
    ModifierPasswordComponent,
    AllArticlesComponent,
    AllMagazinesComponent,
    AddAdminComponent,
    DialogFileComponent,
 
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AdministrationRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatTabsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    NgxSpinnerModule,
    CKEditorModule,
    NgbModule,
    NgxExtendedPdfViewerModule,
  ],
  exports:[
    CommonModule,
    BrowserModule,
    AdministrationRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatTabsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    // PdfViewerModule,
    // YouTubePlayerModule,
    NgxSpinnerModule,
    CKEditorModule,
    NgxSpinnerModule,
    NgbModule,
    NgxExtendedPdfViewerModule,
   
  ],
  providers: [JstmTvService,ArticleService,UserServiceService],
  bootstrap: [AdministrationComponent],
})
export class AdministrationModule { }
