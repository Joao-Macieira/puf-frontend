/* eslint-disable no-undef */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import { Theme } from '~/components';
import { AuthProvider } from '~/components/modules';

import { Login } from '.';

jest.mock('axios');

describe('Login test', () => {
  test('should show login form', () => {
    render(
      <Theme>
        <AuthProvider>
          <Router>
            <Login />
          </Router>
        </AuthProvider>
      </Theme>
    );
    const emailInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Senha');
    const formButton = screen.getByRole('button');
    const signupLink = screen.getByRole('link');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(formButton).toBeInTheDocument();
    expect(signupLink).toBeInTheDocument();

    expect(formButton.textContent).toEqual('Entrar');
    expect(signupLink.textContent).toEqual('Cadastre-se!');
    expect(signupLink).toHaveAttribute('href', '/cadastro');
  });

  test('should show error when validate an especific fields blur', async () => {
    const emailValue = 'abc';

    render(
      <Theme>
        <AuthProvider>
          <Router>
            <Login />
          </Router>
        </AuthProvider>
      </Theme>
    );

    const emailInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Senha');

    await userEvent.type(emailInput, emailValue);
    await userEvent.click(passwordInput);

    const emailError = screen.getByText('E-mail inválido');
    expect(emailError).toBeInTheDocument();

    await userEvent.click(emailInput);

    const passwordError = screen.getByText('Digite uma senha');
    expect(passwordError).toBeInTheDocument();

    const formButton = screen.getByRole('button');
    expect(formButton).toBeDisabled();
  });

  test('should not login user when submit form with incorrect credentials', async () => {
    const dataCredentials = {
      email: 'jm@email',
      password: '123456',
    };

    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: responseData,
      })
    );

    render(
      <Theme>
        <AuthProvider>
          <Router>
            <Login />
          </Router>
        </AuthProvider>
      </Theme>
    );
    const emailInput = screen.getByLabelText('E-mail');
    await userEvent.type(emailInput, dataCredentials.email);

    expect(emailInput.value).toBe(dataCredentials.email);

    const formButton = screen.getByRole('button');
    await userEvent.click(formButton);

    const emailError = screen.getByText('E-mail inválido');

    expect(formButton).toBeDisabled();

    expect(emailError).toBeInTheDocument();
    await waitFor(() => expect(axios.get).not.toHaveBeenCalled());
  });

  test('should login user when submit form with correct credentials', async () => {
    const dataCredentials = {
      email: 'jm@email.com',
      password: '123456',
    };

    const responseData = {
      user: {
        id: 1,
        name: 'João',
        email: dataCredentials.email,
      },
      token: '123',
    };

    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: responseData,
      })
    );

    render(
      <Theme>
        <AuthProvider>
          <Router>
            <Login />
          </Router>
        </AuthProvider>
      </Theme>
    );
    const emailInput = screen.getByLabelText('E-mail');
    await userEvent.type(emailInput, dataCredentials.email);

    const passwordInput = screen.getByLabelText('Senha');
    await userEvent.type(passwordInput, dataCredentials.password);

    expect(emailInput.value).toBe(dataCredentials.email);
    expect(passwordInput.value).toBe(dataCredentials.password);

    const formButton = screen.getByRole('button');
    await userEvent.click(formButton);

    expect(formButton).toBeDisabled();
    await waitFor(() =>
      expect(axios.get).toHaveBeenCalledWith('http://localhost:9901/login', {
        auth: {
          password: dataCredentials.password,
          username: dataCredentials.email,
        },
      })
    );
  });
});
