import { useAuth } from '~/components/modules';

export const Dashboard = () => {
  const [auth, { logout }] = useAuth();

  return (
    <div>
      Olá {auth.name}
      <button type="button" onClick={logout}>
        Sair
      </button>
    </div>
  );
};
