import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserFormComponent } from './public/user-form/user-form.component';
import { IndexComponent } from './public/index/index.component';
import { routing } from './app.routing';
import { ConsoleComponent } from './secure/console/console.component';
import { UserRegistrationComponent } from './public/user-registration/user-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule, MdTableModule } from '@angular/material';
import { GenerateUrlComponent } from './public/generate-url/generate-url.component';
import { UserConfirmationComponent } from './public/user-confirmation/user-confirmation.component';
import {ApiService} from "./services/api.service";

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    IndexComponent,
    ConsoleComponent,
    UserRegistrationComponent,
    GenerateUrlComponent,
    UserConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdTableModule,
    FlexLayoutModule
  ],
  providers: [
    ApiService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
