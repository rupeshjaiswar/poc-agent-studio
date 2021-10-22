import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guards/auth-guard.guard';
import { LayoutComponent } from './modules/users/shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    // canActivate: [AuthenticationGuard]    
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./modules/users/modules/landing-page/landing-page.module').then(m => m.LandingPageModule),
    canActivate: [AuthenticationGuard]    
  },
  
  {
    path: 'create-bot',
    component: LayoutComponent,
    children: [{
        path: 'dashboard',
        loadChildren: () => import('./modules/users/modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthenticationGuard]
    }]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
