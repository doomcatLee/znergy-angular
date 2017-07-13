import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ConsoleComponent } from "./console/console.component";
import { UserRegistrationComponent } from "./user-registration/user-registration.component";

const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'userForm',
    component: UserFormComponent
  },
  {
    path: 'console',
    component: ConsoleComponent
  },
  {
    path: 'userRegistration',
    component: UserRegistrationComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
