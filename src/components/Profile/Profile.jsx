import MyPostsContainer from './MyPosts/MyPostsContainer';
import profile from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props){
    return(
      <div className={profile.content}>
        <ProfileInfo/>
        <MyPostsContainer store={props.store} />
      </div>
    );
}

export default Profile;