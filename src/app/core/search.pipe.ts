import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(todo: Array<any>, term: string): Array<any> {
    return (term =='')? todo: todo.filter(item=> (item.name && term) ? item.name.toLowerCase().includes(term.toLowerCase()) :todo);
  }

}
