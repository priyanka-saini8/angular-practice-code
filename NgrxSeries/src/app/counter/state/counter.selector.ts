import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const getCounterState = createFeatureSelector<CounterState>('counter'); // app module

export const getcounter = createSelector(getCounterState, (state) => {
    return state.counter;
});

export const getText = createSelector(getCounterState, (state) => {
    return state.text;
})