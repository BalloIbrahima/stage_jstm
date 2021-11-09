import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-file',
  templateUrl: './dialog-file.component.html',
  styleUrls: ['./dialog-file.component.scss']
})
export class DialogFileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   @Input() visible: boolean;

    @Output() onConfirm: EventEmitter<void> = new EventEmitter<void>();
    @Output() onDecline: EventEmitter<void> = new EventEmitter<void>();

    confirm() {
        this.onConfirm.emit();
    }

    close() {
        this.onDecline.emit();
    }

}
