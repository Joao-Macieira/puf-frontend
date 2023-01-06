/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Theme } from '~/components';
import { AuthProvider } from '~/components/modules';

import { App } from './index';

test('should be able to render login page when user not logged', () => {
  render(
    <Theme>
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </Theme>
  );

  const emailInput = screen.getByLabelText('E-mail');

  expect(emailInput).toBeInTheDocument();
});

test('should be able to render home page when user are logged', () => {
  const authUser = {
    user: { name: 'João' },
  };

  localStorage.setItem('auth', JSON.stringify(authUser));

  render(
    <Theme>
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </Theme>
  );

  expect(screen.getByText(/Olá João/)).toBeInTheDocument();
});
