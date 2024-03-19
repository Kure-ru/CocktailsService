import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private cocktails: Cocktail[];

  constructor() {
    this.cocktails = [
      new Cocktail(
        'Mojito',
        12,
        'https://cdn.loveandlemons.com/wp-content/uploads/2020/07/mojito.jpg'
      ),
      new Cocktail(
        'Margarita',
        13,
        'https://resize.elle.fr/original/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/margarita-2037408/9397186-12-fre-FR/Margarita.jpg'
      ),
      new Cocktail(
        'Pina Colada',
        15,
        'https://images.immediate.co.uk/production/volatile/sites/30/2013/11/pina-colada-c68aca7.jpg?quality=90&resize=556,505'
      ),
    ];
  }

  public getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}
