import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { postsReducer } from "../posts/post-list/state/posts.reducer";
import { PostState } from "../posts/post-list/state/posts.state";

export interface AppState {
    counter: CounterState,
    posts: PostState
}

export const appReducer = {
    counter: counterReducer,
    posts: postsReducer
}