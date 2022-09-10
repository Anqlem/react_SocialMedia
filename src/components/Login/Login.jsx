import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';
import { fetchUserData, selectIsAuth } from '../../redux/slices/auth';

function Login(){
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    const{register, handleSubmit, setError, formState:{ errors, isValid }} = useForm({
        defaultValues:{
            email:'124124test@test.ru',
            password: '123123'
        }
    });

    const onSubmit = async (values) =>{
        const data = await dispatch(fetchUserData(values));

        if (!data.payload){
            return alert('Не удалось авторизоваться!')

        }

        if ('token' in data.payload){
            window.localStorage.setItem('token', data.payload.token)
        }
    }



    if(isAuth){
        return <Navigate to='/profile'/>
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('email', {required:'Укажите почту'})}></input>
                <input {...register('password', {required:'Укажите пароль'})}></input>
                <button type="submit" >Login</button>
            </form>
        </div>
    )
}

export default Login;