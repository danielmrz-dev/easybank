import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent {
  @Input({required: true}) image: string = ''
  @Input({required: true}) title: string = ''
  @Input({required: true}) text: string = ''
}
