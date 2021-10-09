
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


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

import { UserAppComponent} from './user-app.component';
import { UserappRoutingModule} from './user-app-routing.module';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { SidenavListComponent } from './Navigation/sidenav-list/sidenav-list.component';
import { NosPartenairesComponent } from './nos-partenaires/nos-partenaires.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


import { from } from 'rxjs';
import { AProposComponent } from './a-propos/a-propos.component';
import { JstmTvComponent } from './jstm-tv/jstm-tv.component';
import { MagasineComponent } from './magasine/magasine.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { CommonModule } from '@angular/common';
import { JstmTvService } from '../services/jstm_tv/jstm-tv.service';
import { ArticleService } from '../services/article/article.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

// import { PdfViewerModule } from 'ng2-pdf-viewer';
// import { YouTubePlayerModule } from '@angular/youtube-player';
// import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
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
import { ForumComponent } from './forum/forum.component';
import { NosScientifiquesComponent } from './nos_scientifiques/nos-scientifiques.component';
import { ActuScienceInternationaleComponent } from './actu_science_internationale/actu-science-internationale.component';
import { ActuScienceNationaleComponent } from './actu_science_nationale/actu-science-nationale.component';
import { UserServiceService } from '../services/user_service/user-service.service';
import { DiscusionComponent } from './forum/discusion/discusion.component';
import { CreerSujetComponent } from './forum/creer-sujet/creer-sujet.component';
import { SearchComponent } from './search/search.component';
import { DialogDeconnectComponent } from './dialog-deconnect/dialog-deconnect.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareModule } from 'ngx-sharebuttons';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchOnComponent } from './forum/search-on/search-on.component';


// const rt: Routes=[
  
// ]

@NgModule({
  declarations: [
    UserAppComponent,
    NavigationMenuComponent,
    SidenavListComponent,
    NosPartenairesComponent,
    FooterComponent,
    HomeComponent,
    AProposComponent,
    JstmTvComponent,
    MagasineComponent,
    DetailArticleComponent,
    AgricultureNationaleComponent,
    SanteNationaleComponent,
    EnvironnementeNationaleComponent,
    TechnologieNationaleComponent,
    EducationNationaleComponent,
    SocieteNationaleComponent,
    AgricultureInternationaleComponent,
    InnovationInternationaleComponent,
    EnvironnementInternationaleComponent,
    PortraitsComponent,
    OpinionsComponent,
    EditoComponent,
    OffresComponent,
    ForumAcceuilComponent,
    ForumComponent,
    NosScientifiquesComponent,
    ActuScienceInternationaleComponent,
    ActuScienceNationaleComponent,
    DiscusionComponent,
    CreerSujetComponent,
    SearchComponent,
    DialogDeconnectComponent,
    MonCompteComponent,
    SearchOnComponent
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    UserappRoutingModule,

    // RouterModule.forRoot(rt),
  
    RouterModule,
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
    MatCardModule,
    HttpClientModule,
    // PdfViewerModule,
    YouTubePlayerModule,
    NgxSpinnerModule,
    NgbModule,
    NgxExtendedPdfViewerModule,
    NgxPaginationModule,
    ShareButtonsModule.withConfig({
      debug:true,
    }),
    ShareIconsModule,
    ShareModule,
  ],
  exports:[
    BrowserModule,
    UserappRoutingModule,
  
    
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
    MatCardModule,
    // PdfViewerModule,
    YouTubePlayerModule,
    NgxSpinnerModule,
    NgbModule,
    NgxExtendedPdfViewerModule,
    ShareButtonsModule,
    ShareIconsModule,
    ShareModule
  ],
  providers: [JstmTvService,ArticleService,UserServiceService],
  bootstrap: [UserAppComponent]
})
export class UserappModule { }
