import 'bulma';
import { loadScript } from 'nova-helpers';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import entryPoints from './views.json';



document.addEventListener('NovaMount', ({ detail }) => {
  const { name } = detail;

  const script = entryPoints[name];

  if (script) {
    loadScript(script);
  }
});

ReactDOM.render(<App />, document.getElementById('root'));