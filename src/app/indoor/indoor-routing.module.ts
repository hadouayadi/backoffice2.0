// indoor-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndoorComponent } from './indoor.component';
import { ParentAllComponent } from './gestion-clientel/parents/parent-all/parent-all.component';


const routes: Routes = [
  {
    path: 'indoor',
    component: IndoorComponent,
    // Apply guard to the parent route
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard], // Apply guard to the child route
      },
      {
        path: 'parents',
        component: ParentAllComponent,
        canActivate: [AuthGuard], // Apply guard to the child route
      }
      // Other child routes within the 'IndoorModule'
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndoorRoutingModule { }
