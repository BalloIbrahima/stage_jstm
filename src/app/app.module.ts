import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminAuthentificationModule } from './admin-authentification/admin-authentification.module';
import { AdministrationModule } from './administration/administration.module';
import { UserappModule } from './user-app/user-app.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserAuthentificationModule } from './user-authentification/user-authentification.module';
import { JstmTvService } from './services/jstm_tv/jstm-tv.service';
import { ArticleService } from './services/article/article.service';
import { CKEditorModule } from 'ng2-ckeditor';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    UserappModule,
    AdministrationModule,
    UserAuthentificationModule,
    AdminAuthentificationModule,
    NgbModule,
    CKEditorModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
