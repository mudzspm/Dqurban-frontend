import { createContext, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

interface AuthContextType { 
  token: string | null;
  setToken: (token: string) => void;
  // Define other properties and methods if there are any
}
export const AuthContext = createContext<AuthContextType>({ token: null, setToken: () => {} });

// export const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: any }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('authToken'),
  );

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};
