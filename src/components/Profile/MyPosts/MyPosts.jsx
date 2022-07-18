import React from 'react';
import Post from './Post/Post';
import posts from './MyPosts.module.css';
import { addPostAction, updatePostTextAction } from '../../../redux/profile-reducer';

function MyPosts(props){

  let postElements = props.profilePageData.posts.map(p => <Post message={p.message} likes={p.likes}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostAction());
  }

  let updatePostText = () =>{
    let postText = newPostElement.current.value;
    props.dispatch(updatePostTextAction(postText));
  }
    return(
      <div className={posts.content}>
        <div className={posts.postsBlock}>
          <h3>My Post</h3>
          <div>
            <div>
              <textarea ref={newPostElement} value={props.profilePageData.newPostText} onChange={updatePostText}></textarea>
            </div>
            <div>
              <button onClick={ addPost }>Add Post</button>
            </div>
          </div>
          <div className={posts.posts}>
            { postElements }
          </div>
        </div>
      </div>
    );
}

export default MyPosts;