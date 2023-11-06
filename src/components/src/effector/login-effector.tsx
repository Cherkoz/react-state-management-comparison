import React, { useState } from 'react';

export function LoginEffector() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handlerLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(login + password);
  };

  console.log('render');

  return (
    <form onSubmit={handlerLogin}>
      <input placeholder={'Login'} value={login} onChange={(e) => setLogin(e.target.value)} />
      <input
        placeholder={'Password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => handlerLogin}>Login</button>
    </form>
  );
}
