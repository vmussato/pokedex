import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PokemonId } from '../shared/models/pokemonId';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'pokemon-side',
  templateUrl: './pokemon-side.component.html',
  styleUrls: ['./pokemon-side.component.scss']
})
export class PokemonSideComponent implements OnInit, OnChanges {

  @Input("pokemon") pokemon: PokemonId;

  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['speed', 'special-defense', 'special-attack', 'defense', 'attack', 'hp'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55], label: 'Series A' }
  ];
  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit() {
    console.log(this.pokemon)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, 'changes');

    const pokemon = changes.pokemon.currentValue;
    console.log(pokemon, 'pokemon');

    this.radarChartData = [
      {
        data: [
          pokemon.stats[0].base_stat,
          pokemon.stats[1].base_stat,
          pokemon.stats[2].base_stat,
          pokemon.stats[3].base_stat,
          pokemon.stats[4].base_stat,
          pokemon.stats[5].base_stat
        ],
        label: pokemon.name
      }
    ]
  }

   public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
