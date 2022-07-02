import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addMessage, updateNewMessageText } from './redux/state.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireTree =(state)=>{
  
  root.render(
    <React.StrictMode>
      <App state={state} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>
    </React.StrictMode>
  );
}



reportWebVitals();
