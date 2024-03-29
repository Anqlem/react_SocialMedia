const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
    {id:1, name:'Oleg Kruglov', pic:'https://sun9-37.userapi.com/impf/c845322/v845322015/16adc8/upK6g-1vddk.jpg?size=613x615&quality=96&sign=2fb993ff7899ce83067509731ddfe06d&type=album'},
    {id:2, name:'Artem Pisarenko', pic:'https://sun9-51.userapi.com/s/v1/ig2/bGjBely6u85VNqyTPUc0Rv98o5ITA9MruzuhAcODKvTyVo0q7sG-hNhmoO4W3JuHyOxYzH5dg7kaG6KXeVqf4RJk.jpg?size=50x50&quality=95&crop=507,1003,456,456&ava=1'},
    {id:3, name:'Kostja Kolody', pic:'https://sun9-66.userapi.com/s/v1/ig2/LYVHJfuQryUYkQHb8VgZcd1DZbJ4u2ltn1Nx4ag5wRI0K5Q9U9-jkkG86LoGOwMF8s38UV37Fom2pt8_uzm75eZH.jpg?size=50x50&quality=96&crop=658,957,200,200&ava=1'},
    {id:4, name:'Sasha Don', pic:'https://sun9-42.userapi.com/s/v1/ig2/cm96PyfGcHgeMgSfvGCNX8FGFY6quXGROz99V0HJ8rUdQ6A4iOMfdYI8BzCC026XYwgA0cXVHMQLQT57hPy-1-_9.jpg?size=50x50&quality=96&crop=35,321,319,319&ava=1'},
    {id:5, name:'Viktor Buruyan', pic:'https://sun9-76.userapi.com/s/v1/ig2/xWTjSz3ptuSUhBEFr7xEvh_AENIOxcBtpu6U_KiqCxuRVtlR3wBE7noo-0JC3TUX-7Xa0inLMgpLsU1_3jvhabJ_.jpg?size=50x50&quality=95&crop=154,0,320,320&ava=1'}
],
messages: [
    {id:1, message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora placeat modi consequuntur, recusandae aliquam.'},
    {id:2, message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ea.'},
    {id:3, message:'Lorem ipsum dolor sit amet.'},
    {id:4, message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse similique numquam possimus eum quasi consectetur facilis dicta beatae veniam cumque id velit odit temporibus asperiores, nemo tempora provident perspiciatis quod fugit, laboriosam, eius itaque? Facere quaerat impedit eligendi voluptatibus enim!'},
    {id:5, message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut magnam tempore reiciendis esse eum omnis unde impedit, rem dolorum sit assumenda dicta dolor tempora culpa ducimus neque libero, at eius quam perferendis aspernatur! Excepturi, voluptas!'}
],
newMessageText: ''
};

const dialogsReducer =  (state = initialState, action) => {
    let stateCopy = {...state};
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage={
                id: 6,
                message: stateCopy.newMessageText
            }
            stateCopy.messages=[...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy.newMessageText = action.inputMessage;
            return stateCopy;
        default:
            return state;
    }
}

export const addMessageAction = () => ({type:'ADD-MESSAGE'});
export const updateMessageTextAction = (message) => ({type:'UPDATE-NEW-MESSAGE-TEXT' , inputMessage: message});

export default dialogsReducer;