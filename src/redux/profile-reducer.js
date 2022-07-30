const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id:1, message:'xuyPopa Pisa))))00))', likes:50},
        {id:2, message:'PisaPopa))))', likes:10},
        {id:3, message:'Oleg Krutoi', likes:30}
    ],
    newPostText: ''
    
};

const profileReducer = (state = initialState, action) =>{
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