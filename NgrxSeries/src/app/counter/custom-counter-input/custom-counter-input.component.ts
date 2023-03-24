import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { customChangeText, customIncrement } from '../state/counter.actions';
import { getText } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent {

  value: number;
  text$: Observable<string>;

  constructor( private store: Store<AppState> ){}

  ngOnInit(){
    // this.store.select(getText).subscribe(text => {
    //   console.log("Text===");
    //   this.text = text;
    // })

    this.text$ = this.store.select(getText);

  }

  onAdd(){
    this.store.dispatch(customIncrement({ value: +this.value }));
  }

  onChangeText(){
    this.store.dispatch(customChangeText());
  }

}
