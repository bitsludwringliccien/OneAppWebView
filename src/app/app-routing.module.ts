import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'llamadas', pathMatch: 'full' },
  { path: 'llamadas', loadChildren: () => import('./pages/calls/calls.module').then( m => m.CallsPageModule)},
  { path: 'mensajes', loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
