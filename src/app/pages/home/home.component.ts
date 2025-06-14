import { Component, signal } from '@angular/core';
import { SectionBannerComponent } from "../../shared/components/section-banner/section-banner.component";
import { Card } from '../../core/interfaces/card';
import { CardGridComponent } from "../../shared/components/card-grid/card-grid.component";

@Component({
  selector: 'app-home',
  imports: [SectionBannerComponent, CardGridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  highlitedGamesCards = signal<Card[]>([
    {
      title: "Magic x Final Fantasy",
      description: "Colaboración del mítico juego de cartas Magic con la famosa franquicia de Final Fantasy.",
      imageSource: "/images/cards/magic-ff.png",
      price: "$20.000",
      discount: "¡5% de descuento!"
    },
    {
      title: "Set de inicio - Warhammer 40.000",
      description: "Set introductorio para el juego de mesa basado en el universo de Warhammer 40.000.",
      imageSource: "/images/cards/warhammer-set.jpg",
      price: "$59.990",
      discount: "¡10% de descuento!"
    },
    {
      title: "Gran Santiago",
      description: "El clásico juego de mesa que jugabas cuando niño, ahora de regreso.",
      imageSource: "/images/cards/gran-santiago.png",
      price: "$5.000",
      discount: "Sin descuento"
    }
  ]);

  categoriesCards = signal<Card[]>([
    {
      title: "Cartas (TCG)",
      description: "Juegos de cartas para jugadores de todo el mundo.",
      imageSource: "/images/cards/tcg-category.jpg",
      link: "/categories/tcg"
    },
    {
      title: "Acción",
      description: "Juegos de acción para jugadores de todo el mundo.",
      imageSource: "/images/cards/action-category.jpg",
      link: "/categories/action"
    },
    {
      title: "Rol",
      description: "Juegos de rol para jugadores de todo el mundo.",
      imageSource: "/images/cards/role-category.jpeg",
      link: "/categories/role"
    },
    {
      title: "Casual",
      description: "Juegos de casual para jugadores de todo el mundo.",
      imageSource: "/images/cards/casual-category.jpg",
      link: "/categories/casual"
    }
  ]);
}
