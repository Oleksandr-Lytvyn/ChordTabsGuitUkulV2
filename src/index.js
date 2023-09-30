import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ChordProvider } from 'context/chordContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChordProvider>
      <App />
    </ChordProvider>
  </React.StrictMode>
);
