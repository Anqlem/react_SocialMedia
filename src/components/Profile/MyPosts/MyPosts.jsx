import React from 'react';
import Post from './Post/Post';
import posts from './MyPosts.module.css';
import axios from '../../../axios.js'

function MyPosts(props){

  let postElements = props.profilePageData.posts.map(p => <Post message={p.message} key={p.id} likes={p.likes}/>);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onUpdatePostText = () =>{
    let postText = newPostElement.current.value;
    props.updatePostText(postText);
  }
    return(
      <div className={posts.content}>
        <div className={posts.postsBlock}>
          <h3>My Post</h3>
          <div>
            <div>
              <textarea ref={newPostElement} value={props.profilePageData.newPostText} onChange={onUpdatePostText}></textarea>
            </div>
            <div>
              <button onClick={ onAddPost }>Add Post</button>
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