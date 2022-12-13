import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from './context/context';
import Router from './Routing';
import { SpeechProvider } from '@speechly/react-client';
import './index.css'

ReactDOM.render(
  <SpeechProvider appId="83a1b112-54f8-401d-9834-546746b490ec" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);


