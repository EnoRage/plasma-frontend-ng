import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {TransferComponent} from './components';

const routes: Routes = [
  {path: 'main', component: MainMenuComponent},
  {path: 'transfer', component: TransferComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
