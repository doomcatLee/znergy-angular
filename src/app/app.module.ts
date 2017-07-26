import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserFormComponent } from './public/user-form/user-form.component';
import { IndexComponent } from './public/index/index.component';
import { routing } from './app.routing';
import { ConsoleComponent } from './secure/console/console.component';
import {UserRegistrationComponent, DialogIncompleteForm} from './public/user-registration/user-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import {
  MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule, MdTableModule,
  MdDialog, MdDialogModule
} from '@angular/material';
import { GenerateUrlComponent } from './public/generate-url/generate-url.component';
=======
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule, MdListModule } from '@angular/material';
import { GenerateUrlComponent } from './secure/console/generate-url/generate-url.component';
>>>>>>> grid-list
import { UserConfirmationComponent } from './public/user-confirmation/user-confirmation.component';
import {ApiService} from "./services/api.service";
import {AppService} from "./services/app.service";
import {FlexLayoutModule} from '@angular/flex-layout';
import { ToolBarComponent } from './tool-bar/tool-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    IndexComponent,
    ConsoleComponent,
    UserRegistrationComponent,
    GenerateUrlComponent,
    UserConfirmationComponent,
    DialogIncompleteForm,
    ToolBarComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
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
<<<<<<< HEAD
    MdTableModule,
    MdDialogModule,
    FlexLayoutModule,

=======
    MdListModule
>>>>>>> grid-list
  ],
  providers: [
    ApiService,
    AppService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogIncompleteForm
  ]
})
export class AppModule { }
