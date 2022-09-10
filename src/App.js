import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login'

import {useDispatch, useSelector} from 'react-redux';
import {selectIsAuth, logout } from './redux/slices/auth.js';
import React from 'react';
import { fetchUserMe } from './redux/slices/auth';

function App(props) {

  const dispatch = useDispatch();

  const isAuth = useSelector(selectIsAuth);

  React.useEffect(()=>{
    dispatch(fetchUserMe());
  }, [])
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Nav/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/users' element={<UsersContainer /> } />
            <Route path='/login' element={<Login /> } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
