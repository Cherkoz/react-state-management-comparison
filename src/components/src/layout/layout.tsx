import { Outlet } from 'react-router-dom';
import { Header } from '@my-app/components';
import './layout.css';

export function Layout() {
  return (
    <>
      <Header />
      <main className={'w-full max-w-[1200px] m-auto p-4'}>
        <Outlet />
      </main>
    </>
  );
}
