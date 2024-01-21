// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // Login route
  { path: 'login', component: LoginComponent },

  // Indoor module routes (protected by AuthGuard)
  {
    path: 'indoor',
    loadChildren: () => import('./indoor/indoor.module').then(m => m.IndoorModule),
    canActivate: [AuthGuard],
  
  },

  // Redirect any other invalid URLs to the login page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
