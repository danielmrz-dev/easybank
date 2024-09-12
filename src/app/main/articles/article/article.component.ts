import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  @Input({ required: true }) image: string = ''
  @Input({ required: true }) author: string = ''
  @Input({ required: true }) title: string = ''
  @Input({ required: true }) content: string = ''
}