import MyPosts from './MyPosts/MyPosts';
import profile from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props){
    return(
      <div className={profile.content}>
        <ProfileInfo/>
        <MyPosts postData={props.postData}/>
      </div>
    );
}

export default Profile;