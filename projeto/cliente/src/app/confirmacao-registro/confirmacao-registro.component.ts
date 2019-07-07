import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-confirmacao-registro',
  templateUrl: './confirmacao-registro.component.html',
  styleUrls: ['./confirmacao-registro.component.css']
})
export class ConfirmacaoRegistroComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmacaoRegistroComponent>) { }

  ngOnInit() {
  }

  fechar() {
    this.dialogRef.close();
  }

}
