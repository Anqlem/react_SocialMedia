import MyPosts from './MyPosts';
import { addPostAction, updatePostTextAction } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
  return{
    profilePageData: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) =>{
  return{
    addPost:()=>{
      dispatch(addPostAction());
    },
    updatePostText:(postText)=>{
      dispatch(updatePostTextAction(postText));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;