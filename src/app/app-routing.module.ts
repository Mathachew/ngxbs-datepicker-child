import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as containers from './containers';

export const routes: Routes = [
    {
        path: '',
        component: containers.FullLayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './components/dashboard/dashboard.module#DashboardModule' }
        ]
    }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
