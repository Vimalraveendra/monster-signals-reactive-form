import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { CardListService } from './card-list/card-list.service';

import { CardListComponent } from './card-list/card-list.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { filter,map } from 'rxjs';
import { FilterPipe } from './pipe/filter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardListComponent,SearchBoxComponent,FilterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit{
  private cardListService = inject(CardListService)
  private destroyRef=inject(DestroyRef)

  title = 'monster-signals-reactive-form';
  monsters=this.cardListService.monsters;
  isFetching=signal(false);
  error = signal('');
  filterSearchText=signal<string|null>('');
  

  ngOnInit() {
    this.isFetching.set(true);
     const subscription=this.cardListService.fetchMonsters()
     .subscribe({
      error:(err)=>{
        this.error.set(err.message)
      },
      complete:()=>{
        this.isFetching.set(false)
      }

     })
     this.destroyRef.onDestroy(()=>subscription.unsubscribe())
  }
  onSetSearchText(text:string|null){
    this.filterSearchText.set(text)
  }

}
