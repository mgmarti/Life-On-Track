import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App';

library.add(fas);

ReactDOM.render(<App />, document.getElementById('root'));
