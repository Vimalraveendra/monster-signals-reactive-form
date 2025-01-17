import { Injectable, signal,inject } from "@angular/core";
import { pipe,tap } from "rxjs";
import { IMonster } from "../model/monster.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class CardListService{
    monsters=signal<IMonster[]>([]);
    isFetching=signal(false);
    error = signal('');
    loadedMonsters = this.monsters.asReadonly();

    private httpClient = inject(HttpClient)

    fetchMonsters() {
        return this.httpClient.get<IMonster[]>("https://jsonplaceholder.typicode.com/users").pipe(
           tap({
            next:(users)=>this.monsters.set(users)
           })
        )
       
      }
    
}