import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './shared/routing/app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { PokemonTopBarComponent } from './pokemon-top-bar/pokemon-top-bar.component';
import { PokemonSideComponent } from './pokemon-side/pokemon-side.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent,
    SearchPipe,
    PokemonTopBarComponent,
    PokemonSideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
