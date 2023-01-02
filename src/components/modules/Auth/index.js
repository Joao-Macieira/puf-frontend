import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext([{}, () => ({})]);

export const useAuth = () => {
  const [state, setState] = useContext(AuthContext);

  const logout = () => {
    setState(null);
  };

  return [state, { login: setState, logout }];
};

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState(() => {
    const data = localStorage.getItem('auth');
    return data && JSON.parse(data);
  });

  useEffect(() => {
    localStorage.setItem('auth', state && JSON.stringify(state));
  }, [state]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};
