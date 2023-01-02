import * as React from 'react';
import ReactDOM from 'react-dom/client';

import { Theme } from '~/components';
import { AuthProvider } from '~/components/modules';

import { App } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Theme>
  </React.StrictMode>
);
