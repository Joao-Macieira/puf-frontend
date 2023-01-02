import { BrowserRouter as Router, Route } from 'react-router-dom';

import { useAuth } from '~/components/modules';

import { Signup } from './Signup';

import { Login } from './Login';
import { Dashboard } from './Dashboard';

const AuthRoutes = () => (
  <>
    <Route exact path="/">
      <Login />
    </Route>
    <Route path="/cadastro">
      <Signup />
    </Route>
  </>
);
const LoggedInRoutes = () => (
  <Route exact path="/">
    <Dashboard />
  </Route>
);

export const App = () => {
  const [auth] = useAuth();

  return <Router>{auth?.user ? <LoggedInRoutes /> : <AuthRoutes />}</Router>;
};
