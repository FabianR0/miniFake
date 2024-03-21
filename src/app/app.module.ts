import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardVisualComponent } from './elemento/card-visual/card-visual.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditarComponent } from './elemento/editar/editar.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActualizarComponent } from './elemento/actualizar/actualizar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CardVisualComponent,
    EditarComponent,
    ActualizarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    NgxPaginationModule
    // FormControl,
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
