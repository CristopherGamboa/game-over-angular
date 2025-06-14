import { Component } from '@angular/core';
import { NavbarItem } from '../../../core/interfaces/navbar-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items: NavbarItem[] = [
    {
      name: 'Inicio',
      url: '/'
    },
    {
      name: 'Categorías',
      url: '#',
      dropdown: [
        {
          name: 'Cartas (TCG)',
          url: '/categories/tcg'
        },
        {
          name: 'Acción',
          url: '/categories/action'
        },
        {
          name: 'Rol',
          url: '/categories/role'
        },
        {
          name: 'Casual',
          url: '/categories/casual'
        },
      ]
    },
    {
      name: 'Registro',
      url: '/register'
    }
  ]
}
