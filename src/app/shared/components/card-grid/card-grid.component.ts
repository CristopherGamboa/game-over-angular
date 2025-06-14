import { Component, input } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { Card } from '../../../core/interfaces/card';

@Component({
  selector: 'app-card-grid',
  imports: [CardComponent],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.css'
})
export class CardGridComponent {
  cards = input.required<Card[]>();
}
