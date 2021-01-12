import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { CryptocoinsComponent } from './components/cryptocoins/cryptocoins.component';
import { CommoditiesComponent } from './components/commodities/commodities.component';
import { FiatsComponent } from './components/fiats/fiats.component';
import { IndexesComponent } from './components/indexes/indexes.component';

const routes: Routes = [
  { path: 'cryptocoins', component: CryptocoinsComponent },
  { path: 'commodities', component: CommoditiesComponent },
  { path: 'fiats', component: FiatsComponent },
  { path: 'indexes', component: IndexesComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'cryptocoins' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
