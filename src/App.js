import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Nav/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<Dialogs messagePageData={props.state.messagesPage} dispatch={props.dispatch}/>} />
            <Route path='/profile' element={<Profile postData={props.state.profilePage.posts}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
