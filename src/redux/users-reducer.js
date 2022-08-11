const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
    {id:1, followed: true, fullname:'Oleg Kruglov', pic:'https://sun9-37.userapi.com/impf/c845322/v845322015/16adc8/upK6g-1vddk.jpg?size=613x615&quality=96&sign=2fb993ff7899ce83067509731ddfe06d&type=album', status: 'Im gay', location: {city:'Tallinn', country:'Estonia'}},
    {id:2, followed: true, fullname:'Artem Pisarenko', pic:'https://sun9-51.userapi.com/s/v1/ig2/bGjBely6u85VNqyTPUc0Rv98o5ITA9MruzuhAcODKvTyVo0q7sG-hNhmoO4W3JuHyOxYzH5dg7kaG6KXeVqf4RJk.jpg?size=50x50&quality=95&crop=507,1003,456,456&ava=1', status: 'Ja daun', location: {city:'Tallinn', country:'Estonia'}},
    {id:3, followed: false, fullname:'Kostja Kolody', pic:'https://sun9-66.userapi.com/s/v1/ig2/LYVHJfuQryUYkQHb8VgZcd1DZbJ4u2ltn1Nx4ag5wRI0K5Q9U9-jkkG86LoGOwMF8s38UV37Fom2pt8_uzm75eZH.jpg?size=50x50&quality=96&crop=658,957,200,200&ava=1', status: 'Im gay', location: {city:'Tallinn', country:'Estonia'}},
    {id:4, followed: false, fullname:'Sasha Don', pic:'https://sun9-42.userapi.com/s/v1/ig2/cm96PyfGcHgeMgSfvGCNX8FGFY6quXGROz99V0HJ8rUdQ6A4iOMfdYI8BzCC026XYwgA0cXVHMQLQT57hPy-1-_9.jpg?size=50x50&quality=96&crop=35,321,319,319&ava=1', status: 'Im gay', location: {city:'Tallinn', country:'Estonia'}},
    {id:5, followed: true, fullname:'Viktor Buruyan', pic:'https://sun9-76.userapi.com/s/v1/ig2/xWTjSz3ptuSUhBEFr7xEvh_AENIOxcBtpu6U_KiqCxuRVtlR3wBE7noo-0JC3TUX-7Xa0inLMgpLsU1_3jvhabJ_.jpg?size=50x50&quality=95&crop=154,0,320,320&ava=1', status: 'Im gay', location: {city:'Tallinn', country:'Estonia'}}
    ]
};

const usersReducer =  (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return{
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userID){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userID){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        default:
            return state;
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID} );

export default usersReducer;