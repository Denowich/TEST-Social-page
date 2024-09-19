import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
      { id: 1, message: 'Hello!', likesCount: '10' },
      { id: 2, message: "It's my first post!", likesCount: '11' },
      { id: 3, message: 'Welcome!', likesCount: '5' },
      { id: 4, message: 'Blaa Bla', likesCount: '6' },
      { id: 5, message: 'WTF?', likesCount: '9' },
];

let dialogs = [
      { id: 1, name: 'Den' },
      { id: 2, name: 'Danya' },
      { id: 3, name: 'Rex' },
      { id: 4, name: 'Vika' },
      { id: 5, name: 'Sashko' },
];

let messages = [
      { id: 1, message: 'Hi!' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Best!' },
      { id: 4, message: 'Fuck!' },
      { id: 5, message: 'Yoo!' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
            <App posts={posts} dialogs={dialogs} messages={messages} />
      </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
