import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-section-banner',
  imports: [],
  templateUrl: './section-banner.component.html',
  styleUrl: './section-banner.component.css'
})
export class SectionBannerComponent {
  title = input.required<string>();
  imageSource = input.required<string>(); 

}
