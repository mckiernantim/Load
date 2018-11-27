import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  } from '@angular/material';
  


import { NgModule } from '@angular/core';



@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatRadioModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule],
    exports: [MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatRadioModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule],
})
export class MaterialModule {}