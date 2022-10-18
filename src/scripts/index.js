import React from 'react';
import { createRoot } from 'react-dom/client';
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/main.css';
import './views/components/contents/skip-link';
import './views/components/app-shell/app-bar';
import './views/components/app-shell/foot-bar';
import App from './views/App';

const root = createRoot(document.getElementById('root'));
root.render(<App/>);
