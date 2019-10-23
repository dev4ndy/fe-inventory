import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule,
  MatCardModule
} from '@angular/material';

const modules = [
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatDialogModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule].concat(modules),
  exports: modules
})
export class MaterialModule { }
