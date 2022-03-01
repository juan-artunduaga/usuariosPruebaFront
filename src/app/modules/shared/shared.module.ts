import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { ActivoPipe } from './pipes/activo/activo.pipe';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ActivoPipe
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    ActivoPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
    

  ]
})
export class SharedModule { }
