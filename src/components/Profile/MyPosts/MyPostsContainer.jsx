import React from 'react';
import MyPosts from './MyPosts';
import { addPostAction, updatePostTextAction } from '../../../redux/profile-reducer';

function MyPostsContainer(props){
  let state = props.store.getState().profilePage;

  let addPost = () => {
    props.store.dispatch(addPostAction());
  }

  let updatePostText = (postText) =>{
    props.store.dispatch(updatePostTextAction(postText));
  }
    return(
      <MyPosts addPost={addPost} updatePostText={updatePostText} profilePageData={state}/>
    );
}

export default MyPostsContainer;