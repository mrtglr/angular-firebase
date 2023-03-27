import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }