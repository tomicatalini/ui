import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { PersonasComponent } from './components/personas/personas.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonasService } from './service/personas.service';
import { FormularioComponent } from './components/formulario/formulario.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicControlFormComponent } from './components/dynamic-control-form/dynamic-control-form.component';
import { FormService } from './service/form.service';
import { Observable } from 'rxjs';
import { FormBase } from './model/FormBase';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    FormularioComponent,
    DynamicFormComponent,
    DynamicControlFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule, 
    MatIconModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ PersonasService, FormService ], //Servicios que vamos a ir usando
  bootstrap: [AppComponent]
})
export class AppModule {    

 }
