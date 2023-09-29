import { Outlet } from 'react-router-dom';
import { Header } from '@my-app/components';
import './layout.css';

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
