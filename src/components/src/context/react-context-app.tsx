import { MainContextPage, LoginContextPage } from '@my-app/components';
import { useAuth } from '@my-app/stores';

export function ReactContextApp() {
  const auth = useAuth();

  return auth.user ? <MainContextPage /> : <LoginContextPage />;
}
