import { Component, computed, input, signal } from '@angular/core';
import { Card } from '../../core/interfaces/card';
import { SectionBannerComponent } from "../../shared/components/section-banner/section-banner.component";
import { CardGridComponent } from "../../shared/components/card-grid/card-grid.component";

@Component({
  selector: 'app-category',
  imports: [SectionBannerComponent, CardGridComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  category = input.required<string>();

  banner = computed(() => {
    switch (this.category()) {
      case "tcg":
        return "/images/cards/tcg-category.jpg";
      case "action":
        return "/images/cards/action-category.jpg";
      case "role":
        return "/images/cards/role-category.jpeg";
      case "casual":
        return "/images/cards/casual-category.jpg";
      default:
        return "";
    }
  })

  title = computed(() => {
    switch (this.category()) {
      case "tcg":
        return "Cartas (TCG)";
      case "action":
        return "Acción";
      case "role":
        return "Rol";
      case "casual":
        return "Casual";
      default:
        return "";
    }
  })

  cards = computed(() => {
    switch (this.category()) {
      case "tcg":
        return this.tcgCards();
      case "action":
        return this.actionCards();
      case "role":
        return this.roleCards();
      case "casual":
        return this.casualCards();
      default:
        return [];
    }
  });

  tcgCards = signal<Card[]>([
    {
      title: "Magic x Final Fantasy",
      description: "Colaboración del mítico juego de cartas Magic con la famosa franquicia de Final Fantasy.",
      imageSource: "/images/cards/magic-ff.png",
      price: "$20.000",
      discount: "¡5% de descuento!"
    },
    {
      title: "Yu-Gi-Oh! - Pack de 24 sobres",
      description: "Pack de 24 sobres de la famosa franquicia de Yu-Gi-Oh!",
      imageSource: "/images/cards/yugioh-tcg.png",
      price: "$69.990",
      discount: "¡10% de descuento!"
    },
    {
      title: "Pokémon TCG Pack",
      description: "Pack 'Journey Together' del TCG de Pokémon.",
      imageSource: "/images/cards/pokemon-tcg.webp",
      price: "$50.000",
      discount: "¡10% de descuento!"
    }
  ]);

  actionCards = signal<Card[]>([
    {
      title: "Memoir 44",
      description: "Juego de mesa histórico de batallas de la segunda guerra mundial.",
      imageSource: "/images/cards/memoir-44.webp",
      price: "%99.990",
      discount: "¡15% de descuento!"
    },
    {
      title: "Set de inicio - Warhammer 40.000",
      description: "Set introductorio para el juego de mesa basado en el universo de Warhammer 40.000.",
      imageSource: "/images/cards/warhammer-set.jpg",
      price: "$59.990",
      discount: "¡10% de descuento!"
    },
    {
      title: "Imperial Assault",
      description: "Juego de mesa ambientado en el universo de Star Wars.",
      imageSource: "/images/cards/imperial-assault.webp",
      price: "$81.990",
      discount: "¡5% de descuento!"
    }
  ]);

  roleCards = signal<Card[]>([
    {
      title: "D&D - Comienza la aventura",
      description: "Set introductorio para el juego de mesa basado en el universo de D&D.",
      imageSource: "/images/cards/dnd-1.webp",
      price: "$24.990",
      discount: "¡5% de descuento!"
    },
    {
      title: "D&D - Caos en Neverwinter",
      description: "Juego de mesa ambientado en el universo de D&D.",
      imageSource: "/images/cards/dnd-2.webp",
      price: "$49.990",
      discount: "¡10% de descuento!"
    },
    {
      title: "D&D - La leyenda de Drizzt",
      description: "Juego de mesa ambientado en el universo de D&D.",
      imageSource: "/images/cards/dnd-3.jpg",
      price: "$74.990",
      discount: "¡10% de descuento!"
    }
  ]);

  casualCards = signal<Card[]>([
    {
      title: "Gran Santiago",
      description: "El clásico juego de mesa que jugabas cuando niño, ahora de regreso.",
      imageSource: "/images/cards/gran-santiago.png",
      price: "$5.000",
      discount: "Sin descuento"
    },
    {
      title: "Zombie Kittens",
      description: "Un juego de cartas con temática de zombies y gatos.",
      imageSource: "/images/cards/zombie-kittens.webp",
      price: "$19.990",
      discount: "Sin descuento"
    },
    {
      title: "Dungeon & Drinks",
      description: "Juego de fiesta basado en Dungeons & Dragons.",
      imageSource: "/images/cards/dungeon-n-drinks.webp",
      price: "$29.990",
      discount: "Sin descuento"
    }
  ]);
}
