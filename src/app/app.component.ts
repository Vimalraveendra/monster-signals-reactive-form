import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CardListService } from './card-list/card-list.service';
import { IMonster } from './model/monster.model';
import { CardListComponent } from './card-list/card-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit{
  title = 'monster-signals-reactive-form';
  monsters=signal<IMonster[]>([]);
  isFetching=signal(false);
  error = signal('');
    private cardListService = inject(CardListService)

  ngOnInit() {
    this.isFetching.set(true);
     this.cardListService.fetchMonsters().subscribe({
      next:users=>this.monsters.set(users),
      error:(err)=>{
        this.error.set(err.message)
      },
      complete:()=>{
    
        this.isFetching.set(false)
      }
     })
  }
}
