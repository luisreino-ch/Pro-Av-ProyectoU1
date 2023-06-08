import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationList1Component } from './registration-list1/registration-list1.component';
import { RegistrationList2Component } from './registration-list2/registration-list2.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'register' },

  { path: 'list1', component: RegistrationList1Component },
  { path: 'list2', component: RegistrationList2Component },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
