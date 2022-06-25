import post from './Post.module.css';

function Post(props){
    return(
      <div className={post.item}>
        <img src='https://sun9-4.userapi.com/s/v1/ig2/EKUj8l7cqvrYP7IkrEgSLIZxNCRsbUDqC4sB5Dh8qpv3Jnor9CVcnb-cW4Z8XwfOdLHPHQPFZN18tPOMFfdG5rCE.jpg?size=1440x1429&quality=95&type=album'/>
            {props.message}
        <div>
          <span>Likes: {props.likes}</span>
        </div>
      </div>
    );
}

export default Post;