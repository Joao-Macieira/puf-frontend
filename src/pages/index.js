import { useState, useEffect } from 'react';
import { Theme } from '~/components';

// import { Signup } from './Signup';
import { Login } from './Login';

const Dashboard = ({ onLogout }) => {
  return (
    <div>
      Estou logado
      <button type="button" onClick={onLogout}>
        Sair
      </button>
    </div>
  );
};

export const App = () => {
  const [state, setState] = useState(() => {
    const data = localStorage.getItem('auth');
    return data && JSON.parse(data);
  });

  useEffect(() => {
    localStorage.setItem('auth', state && JSON.stringify(state));
  }, [state]);

  const logout = () => {
    setState(null);
  };

  return (
    <Theme>
      {state?.user ? (
        <Dashboard onLogout={logout} />
      ) : (
        <Login onSuccess={setState} />
      )}
    </Theme>
  );
};
