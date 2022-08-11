import Users from './Users'
import { followAC, unfollowAC } from '../../redux/users-reducer'
import {connect} from 'react-redux'

let mapStateToProps = (state) =>{
    return{
      usersPageData: state.usersPage
    }
  }

let mapDispatchToProps = (dispatch) =>{
    return{
        follow:(userID)=>{
            dispatch(followAC(userID));
          },
        unfollow:(userID)=>{
            dispatch(unfollowAC(userID));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;