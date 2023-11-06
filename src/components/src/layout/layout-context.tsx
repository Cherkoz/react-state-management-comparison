import { ReactNode } from 'react';
import { useAuth } from '@my-app/stores';

interface LayoutContextProps {
  children: ReactNode;
}

export function LayoutContext({ children }: LayoutContextProps) {
  const auth = useAuth();
  if (!auth) return null;

  return <>{children}</>;
}
