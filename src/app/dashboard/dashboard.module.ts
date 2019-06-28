import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CommonModule } from '@angular/common';

import { dashboardRoutes } from './dashboard.routes';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

// dialoug
import { MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';

// autocomplete filter
import { MatAutocompleteModule } from '@angular/material/autocomplete';
//
import { UserFilterPipe } from './../pipes/user-filter.pipe';

@NgModule({
  declarations: [LayoutComponent, HomeComponent, AdminComponent, UserFilterPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    NgxPaginationModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatAutocompleteModule,
    FormsModule
  ]
})
export class DashboardModule { }
