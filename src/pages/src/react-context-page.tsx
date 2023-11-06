import { ReactContextApp } from '@my-app/components';
import { AuthProvider } from '@my-app/stores';

export function ReactContextPage() {
  return (
    <AuthProvider>
      <ReactContextApp />
    </AuthProvider>
  );
}
