import React, { useState } from 'react';
import { useAuth } from '@my-app/stores';

export function LoginContextPage() {
  const auth = useAuth();

  if (!auth) return null;

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handlerLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth.login({ login, password });
  };

  return (
    <form onSubmit={handlerLogin}>
      <h1>Context page</h1>
      <input placeholder={'Login'} value={login} onChange={(e) => setLogin(e.target.value)} />
      <input
        placeholder={'Password'}
        value={password}
        type={'password'}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => handlerLogin}>Login</button>
    </form>
  );
}
