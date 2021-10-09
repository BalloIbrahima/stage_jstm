import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatMenuModule} from '@angular/material/menu';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { AdminAuthentificationRoutingModule } from './admin-authentification-routing.module';
import { AdminAuthentificationComponent } from './admin-authentification.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminAuthentificationComponent

  ],
  imports: [
    CommonModule,
    AdminAuthentificationRoutingModule,
    BrowserModule,
     // RouterModule.forChild(routes),
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatTabsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class AdminAuthentificationModule { }
