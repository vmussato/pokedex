import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailComponent } from 'src/app/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: '', component: PokemonDetailComponent },
  { path: 'detail/:id', component: PokemonDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
