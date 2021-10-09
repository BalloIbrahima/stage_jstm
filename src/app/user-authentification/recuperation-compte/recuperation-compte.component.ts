import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecuperationComptePassComponent } from '../recuperation-compte-pass/recuperation-compte-pass.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-recuperation-compte',
  templateUrl: './recuperation-compte.component.html',
  styleUrls: ['./recuperation-compte.component.scss']
})
export class RecuperationCompteComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }



  openPassDialog(): void {
    // const dialogclo = this.dialog.closeAll();
    const dialogRef = this.dialog.open(RecuperationComptePassComponent, {
      width: '1000px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
