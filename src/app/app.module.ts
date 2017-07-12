import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ZConsoleComponent } from './z-console/z-console.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    ZConsoleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
