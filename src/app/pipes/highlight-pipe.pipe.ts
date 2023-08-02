import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightPipe'
})
export class HighlightPipePipe implements PipeTransform {

  transform(value: string, keywords: string[]): string {
    if(!value || keywords.length ===0 ){
      return value
    }else{
      const keywordRegex = keywords.map(keyword => `\\b${this.escapeRegex(keyword)}\\b`).join('|');
      const regex = new RegExp(keywordRegex, 'gi')
      return value.replace(regex, match =>`<span class="highlight">${match}</span>`)
    }
  }
  private escapeRegex(text: string): string {
    return text.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
}
