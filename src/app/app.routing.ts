import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UserFormComponent } from './user-form/user-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'userForm',
    component: UserFormComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
