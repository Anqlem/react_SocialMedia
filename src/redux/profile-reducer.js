const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) =>{
    switch(action.type){
        case ADD_POST:
            let newPost={
                id: 6,
                message: state.newPostText,
                likes: 10
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.inputPostText;
            return state;
        default:
            return state;
    }
}

export const addPostAction = () => ({type: 'ADD-POST'});
export const updatePostTextAction = (postText) => ({type: 'UPDATE-NEW-POST-TEXT', inputPostText: postText })

export default profileReducer;