import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './modules/core.module';
import {
  MatTableModule, MatCardModule, MatInputModule, MatToolbarModule,
  MatButtonModule, MatIconModule, MatGridListModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonInfoComponent} from './components/';
import {DepositComponent} from './components/';
import {DepositHistoryComponent} from './components/';
import {PlasmaComponent} from './components';
import {ExitComponent} from './components';
import {TransferHistoryComponent} from './components';
import {DashboardComponent} from './components';
import {TransferComponent} from './components';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CommonInfoComponent,
    DepositComponent,
    PlasmaComponent,
    ExitComponent,
    TransferHistoryComponent,
    DashboardComponent,
    TransferComponent,
    MainMenuComponent,
    DepositHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatToolbarModule,
    MatIconModule,
    CoreModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
