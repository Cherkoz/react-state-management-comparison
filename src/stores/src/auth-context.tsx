import { createContext, ReactNode, useContext, useState } from 'react';
import { UserDto, UserPayload } from '@my-app/types';

interface AuthContextDto {
  user: UserDto | undefined;
  login: (payload: UserPayload) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextDto | null>(null);

export const useAuth = () => {
  const { user, logout, login } = useContext(AuthContext) as AuthContextDto;
  return { user, logout, login };
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserDto | undefined>(undefined);

  const login = (payload: UserPayload) => {
    setUser({ login: payload.login });
  };

  const logout = () => {
    setUser(undefined);
  };

  const authContextValue = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};
