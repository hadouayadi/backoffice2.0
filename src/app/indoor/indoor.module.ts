import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndoorRoutingModule } from './indoor-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TherapeutesAllComponent } from './gestion-clientel/therapeutes/therapeutes-all/therapeutes-all.component';
import { TherapeutesOrthoComponent } from './gestion-clientel/therapeutes/therapeutes-ortho/therapeutes-ortho.component';
import { TherapeutePsychoComponent } from './gestion-clientel/therapeutes/therapeute-psycho/therapeute-psycho.component';
import { TherapeuteErgoComponent } from './gestion-clientel/therapeutes/therapeute-ergo/therapeute-ergo.component';
import { TherapeuteDeletedComponent } from './gestion-clientel/therapeutes/therapeute-deleted/therapeute-deleted.component';
import { ParentAllComponent } from './gestion-clientel/parents/parent-all/parent-all.component';
import { EcolesComponent } from './gestion-clientel/institue/ecoles/ecoles.component';
import { CentreComponent } from './gestion-clientel/institue/centre/centre.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IndoorComponent } from './indoor.component';
import { AuthService } from '../auth/auth.service';
import { ParentDeletedComponent } from './gestion-clientel/parents/parent-deleted/parent-deleted.component';



@NgModule({
  declarations: [
    DashboardComponent,
    TherapeutesAllComponent,
    TherapeutesOrthoComponent,
    TherapeutePsychoComponent,
    TherapeuteErgoComponent,
    TherapeuteDeletedComponent,
    ParentAllComponent,
    EcolesComponent,
    CentreComponent,
    SidebarComponent,
    IndoorComponent,
    ParentDeletedComponent
  ],
  imports: [
    CommonModule,
    IndoorRoutingModule
  ],
  providers: [AuthService],
})
export class IndoorModule { }
