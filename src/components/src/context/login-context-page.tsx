import { useAuth } from '@my-app/stores';
import * as Yup from 'yup';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card } from 'flowbite-react';
import { ControlledInput } from '@my-app/components';

const formSchema = Yup.object().shape({
  login: Yup.string().required(),
  password: Yup.string().required(),
});

export function LoginContextPage() {
  const { login } = useAuth();

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
    login(data);
  });

  return (
    <FormProvider {...formMethods}>
      <Card className={'max-w-[500px] m-auto'}>
        <form onSubmit={submit}>
          <ControlledInput name={'login'} label={'Username'} />
          <ControlledInput name={'password'} label={'Password'} type={'password'} />

          <Button className={'w-full mt-4'} color={'blue'} onClick={submit}>
            Login
          </Button>
        </form>
      </Card>
    </FormProvider>
  );
}
