import profile from './ProfileInfo.module.css';

function ProfileInfo(){
    return(
      <div className={profile.content}>
        <img src='https://img.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg?w=2000'/>
        <div className={profile.descBlock}>
          ava + desc
        </div>
      </div>
    );
}

export default ProfileInfo;