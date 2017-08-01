import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './public/index/index.component';
import { UserFormComponent } from './public/user-form/user-form.component';
import { ConsoleComponent } from './secure/console/console.component';
import { ZConsoleComponent } from './z-console/z-console.component';
import { UserRegistrationComponent } from './public/user-registration/user-registration.component';
import { UserConfirmationComponent } from './public/user-confirmation/user-confirmation.component';

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
  },
  {
    path: 'userConfirmation',
    component: UserConfirmationComponent
  },
  {
    path: 'z-console',
    component: ZConsoleComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
