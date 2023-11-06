import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { useForm, FormProvider } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const formSchema = Yup.object().shape({
  login: Yup.string().required(),
  password: Yup.string().required(),
});

export function LoginEffector() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const formMethods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(formSchema),
    defaultValues: {
      login: '',
      password: '',
    },
  });
  const { handleSubmit } = formMethods;

  const submit = handleSubmit(async (data) => {
    console.log(data);
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(login + password);
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={submit}>
        <input placeholder={'Login'} value={login} onChange={(e) => setLogin(e.target.value)} />
        <input
          placeholder={'Password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={() => handleLogin}>Login</Button>
      </form>
    </FormProvider>
  );
}
