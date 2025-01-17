import { Component, OnInit, output } from '@angular/core';
import { FormGroup,FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent implements OnInit {
   searchTextEvent =output<string|null>();
  filteredText=new FormGroup({
     searchText:new FormControl('')
  })
  ngOnInit(){
     this.filteredText.get('searchText')!.valueChanges.subscribe({
      next:value=>this.searchTextEvent.emit(value)
     })
     
  }
}
