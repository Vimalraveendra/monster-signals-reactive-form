import { Pipe, PipeTransform } from '@angular/core';
import { IMonster } from '../model/monster.model';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value:IMonster[], searchText:string|null){
    const filterArray=[...value]
    if(value.length===0 || searchText==='' || searchText===null){
      return value;
    }
    return filterArray.filter((user:IMonster)=> user.name.trim().toLowerCase().indexOf(searchText.trim().toLowerCase())!==-1);
  }

}
