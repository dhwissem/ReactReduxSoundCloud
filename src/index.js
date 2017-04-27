import React from 'react';
import ReactDOM from 'react-dom';

const title = 'You are good to start hacking in React!!';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
