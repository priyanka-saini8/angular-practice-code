import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.actions";
import { intialState } from "./counter.state";

export function counterReducer(state, action){
    return _counterReducer(state, action);
}

const _counterReducer = createReducer(
    intialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        };
    }),
    
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter -1
        }
    }),

    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    })
)

