import React from 'react';
import Post from './Post/Post';
import posts from './MyPosts.module.css';

function MyPosts(props){

  let postElements = props.postData.map(p => <Post message={p.message} likes={p.likes}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

    return(
      <div className={posts.content}>
        <div className={posts.postsBlock}>
          <h3>My Post</h3>
          <div>
            <div>
              <textarea ref={newPostElement}></textarea>
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