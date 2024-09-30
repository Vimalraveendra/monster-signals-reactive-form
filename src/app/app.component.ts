import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardListComponent } from "./card-list/card-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'monster-signals-reactive-form';
}
