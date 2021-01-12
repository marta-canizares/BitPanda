// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { CryptocoinsComponent } from './components/cryptocoins/cryptocoins.component';
import { CommoditiesComponent } from './components/commodities/commodities.component';
import { FiatsComponent } from './components/fiats/fiats.component';
import { IndexesComponent } from './components/indexes/indexes.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptocoinsComponent,
    CommoditiesComponent,
    FiatsComponent,
    IndexesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
