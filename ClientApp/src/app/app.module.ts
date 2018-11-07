import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { RegistreringComponent } from './registrering/registrering.component';
import { BetalingComponent } from './betaling/betaling.component';
import { StilleSpoarsmaalComponent } from './stille-spoarsmaal/stille-spoarsmaal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    RegistreringComponent,
    BetalingComponent,
    StilleSpoarsmaalComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'registering', component: RegistreringComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  //visKatogori: boolean;
  //side: boolean;

  //visKategoriSide() {
  //  this.visKatogori = false;
  //  this.side = true;

  //}

  //tilbaketilKategori() {
  //  this.visKatogori = true;
  //  this.side = false;
  //}
}
