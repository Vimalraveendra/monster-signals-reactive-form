import { Injectable, signal,inject } from "@angular/core";
import { IMonster } from "../model/monster.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class CardListService{
    monsters=signal<IMonster[]>([]);
    loadedMonsters = this.monsters.asReadonly;

    private httpClient = inject(HttpClient)

    fetchMonsters() {
        return this.httpClient.get<IMonster[]>("https://jsonplaceholder.typicode.com/users")
       
      }
    
}