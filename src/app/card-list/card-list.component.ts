import { Component,input } from '@angular/core';
import { IMonster } from '../model/monster.model';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  monster =input.required<IMonster>();
}
