import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EffectorPage, MainPage, ReactContextPage, ReduxPage } from '@my-app/pages';
import { Layout } from '@my-app/components';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path={'/'} element={<MainPage />} />
          <Route path={'/react-context'} element={<ReactContextPage />} />
          <Route path={'/redux'} element={<ReduxPage />} />
          <Route path={'/effector'} element={<EffectorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
