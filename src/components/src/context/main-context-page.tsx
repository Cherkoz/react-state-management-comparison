import { useAuth } from '@my-app/stores';

export function MainContextPage() {
  const auth = useAuth();

  if (!auth || !auth.user) return null;

  return (
    <>
      <>Привет, {auth.user.login}!</>
    </>
  );
}
