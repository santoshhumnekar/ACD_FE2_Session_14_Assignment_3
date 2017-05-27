import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';

export const APP_ROUTES : Routes = [
    {path: '', redirectTo: '/promise', pathMatch:'full'},
    {path: 'promise', component:PromiseComponent},
    {path: 'observable', component:ObservableComponent}
];

export const routes : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);