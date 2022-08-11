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
    let stateCopy = {...state};
    switch(action.type){
        case ADD_POST:
            let newPost={
                id: 6,
                message: stateCopy.newPostText,
                likes: 10
            }
            stateCopy.posts=[...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.inputPostText;
            return stateCopy;
        default:
            return state;
    }
}

export const addPostAction = () => ({type: 'ADD-POST'});
export const updatePostTextAction = (postText) => ({type: 'UPDATE-NEW-POST-TEXT', inputPostText: postText })

export default profileReducer;