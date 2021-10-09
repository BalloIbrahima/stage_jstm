import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';

// import { MatFormFieldModule, MatInputModule } from '@angular/material';

import { UserAuthentificationComponent } from './user-authentification.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { UserAuthentificationRoutingModule } from './user-authentification-routing.module';
import { UserCreateCompteComponent } from './user-create-compte/user-create-compte.component';
import { RecuperationComptePassComponent } from './recuperation-compte-pass/recuperation-compte-pass.component';
import { RecuperationCompteComponent } from './recuperation-compte/recuperation-compte.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    UserAuthentificationComponent,
    UserCreateCompteComponent,
    RecuperationCompteComponent,
    RecuperationComptePassComponent,
  ],
  imports: [
    CommonModule,
    UserAuthentificationRoutingModule,
    BrowserModule,
     // RouterModule.forChild(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatTabsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule ,
    NgxSpinnerModule,

  ]
})
export class UserAuthentificationModule { }



// import {Component, Inject} from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// export interface DialogData {
//   animal: string;
//   name: string;
// }

// /**
//  * @title Dialog Overview
//  */
// @Component({
//   selector: 'dialog-overview-example',
//   templateUrl: 'dialog-overview-example.html',
// })
// export class DialogOverviewExample {

//   animal: string;
//   name: string;

//   constructor(public dialog: MatDialog) {}

//   openDialog(): void {
//     const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
//       width: '250px',
//       data: {name: this.name, animal: this.animal}
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.animal = result;
//     });
//   }

// }

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog-overview-example-dialog.html',
// })
// export class DialogOverviewExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }


// <ol>
//   <li>
//     <mat-form-field>
//       <mat-label>What's your name?</mat-label>
//       <input matInput [(ngModel)]="name">
//     </mat-form-field>
//   </li>
//   <li>
//     <button mat-raised-button (click)="openDialog()">Pick one</button>
//   </li>
//   <li *ngIf="animal">
//     You chose: <i>{{animal}}</i>
//   </li>
// </ol>