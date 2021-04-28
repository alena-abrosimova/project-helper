import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  /**
   * Возвращает строку с тегом <mark> вокруг найденного query
   */

  transform(text: string, query: string): string {
    return text && query && typeof text === 'string' ? this.getHighlightedValue(text, query) : text;
  }

  getHighlightedValue(text: string, query: string): string {
    text = text.replace(new RegExp(query, 'gi'), '<mark>$&</mark>');

    return text.replace(new RegExp(/\s/, 'g'), '&nbsp');
  }
}
