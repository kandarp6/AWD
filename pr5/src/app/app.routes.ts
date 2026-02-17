import { Routes } from '@angular/router';
import { Pr5Component } from './pr5/pr5';

export const routes: Routes = [
    { path: 'pr5', component: Pr5Component },
    { path: '', redirectTo: 'pr5', pathMatch: 'full' }
];
