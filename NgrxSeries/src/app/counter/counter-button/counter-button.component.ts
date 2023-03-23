import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent {

  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();

  constructor( private store: Store< {counter: {counter: number}} > ){} // {appmodule store obj: intialstate}

  onIncrement(){
    // this.increment.emit();
    this.store.dispatch(increment());
  }

  onDecrement(){
    // this.decrement.emit();
    this.store.dispatch(decrement());
  }

  onReset(){
    // this.reset.emit();
    this.store.dispatch(reset());
  }
}
