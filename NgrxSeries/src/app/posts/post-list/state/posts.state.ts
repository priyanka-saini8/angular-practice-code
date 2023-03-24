import { Post } from "src/app/models/posts.model"

export interface PostState {
    posts: Post[];
}

export const initialState: PostState = {
    posts: [
        {id: '1', title: 'Sample Title 1', description: 'Description 1'},
        {id: '2', title: 'Sample Title 2', description: 'Description 2'},
        {id: '3', title: 'Sample Title 3', description: 'Description 3'}

    ]
}