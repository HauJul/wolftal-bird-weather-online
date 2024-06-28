import { Routes } from '@angular/router';
import { Fly2CloudComponent } from './fly-2-cloud/fly-2-cloud.component';

export const routes: Routes = [
    {
        path: 'spitzfelsen',
        component: Fly2CloudComponent,
    },
    {
        path: '**',
        redirectTo: '#',
      },
];
