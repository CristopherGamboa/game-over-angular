import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card } from '../../../core/interfaces/card';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  card = input.required<Card>();
}