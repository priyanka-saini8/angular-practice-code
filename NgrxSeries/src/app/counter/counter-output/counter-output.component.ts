import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { getcounter } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy {

  // @Input() counter?: number;
  // counter: number;
  counter$: Observable<number>;
  counterSubscription: Subscription;
  // counter$: Observable<{ counter: number }>;

  // constructor(private store: Store<{ counter: {counter: number}}>){}
  constructor( private store: Store<AppState>){}

  ngOnInit(): void {
    // this.counterSubscription = this.store.select('counter').subscribe(data => {
    //   this.counter = data.counter;
    // });

    // this.counterSubscription = this.store.select(getcounter).subscribe(counter => {
    //   console.log("counter===")
    //   this.counter = counter;
    // });

    // this.counter$ = this.store.select('counter');

    this.counter$ = this.store.select(getcounter);
  }

  ngOnDestroy(){
  //   if(this.counterSubscription)
  //     this.counterSubscription.unsubscribe();
  }

}
function getCounter(getCounter: any) {
  throw new Error('Function not implemented.');
}

