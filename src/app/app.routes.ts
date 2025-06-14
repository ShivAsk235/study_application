import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {
    path: 'login',
    loadComponent:()=> import('./container/login/login.component').then(m=> m.LoginComponent)
    },
    {
    path: 'dashboard',
    loadComponent: () => import('./container/dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: 'settings',
        loadComponent:()=> import('./container/settings/settings.component').then(m => m.SettingsComponent)
    }
];
