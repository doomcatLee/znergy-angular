import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { IndexComponent } from './index/index.component';
import { routing } from './app.routing';
import { ConsoleComponent } from './console/console.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule, MdTableModule } from '@angular/material';
import { GenerateUrlComponent } from './generate-url/generate-url.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    IndexComponent,
    ConsoleComponent,
    UserRegistrationComponent,
    GenerateUrlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
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
    MdTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
