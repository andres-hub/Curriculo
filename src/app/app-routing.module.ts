import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
    imports: [
        RouterModule.forRoot( APP_ROUTES, { useHash: true} )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
