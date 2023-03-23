import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customChangeText, customIncrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent {

  value: number;
  text: string;

  constructor( private store: Store<{ counter: CounterState }> ){}

  ngOnInit(){
    console.log("Text===");
    this.store.select('counter').subscribe(data => {
      this.text = data.text;
    })

  }

  onAdd(){
    this.store.dispatch(customIncrement({ value: +this.value }));
  }

  onChangeText(){
    this.store.dispatch(customChangeText());
  }

}
