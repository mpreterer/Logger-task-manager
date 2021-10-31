import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }: any) {
  const { pathname, events } = useRouter();
  const [isLoginIn, setIsLoginIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token) {
      setIsLoginIn(true);
    }

    if (pathname !== '/' && pathname !== '/trello/auth' && !token) {
      window.location.href = '/'
    }

    const handleRouteChange = (url: string) => {
      if (url !== '/' && pathname !== '/trello/auth' && !token) {
        window.location.href = '/'
      }
    }

    // Monitor routes
    events.on('routeChangeStart', handleRouteChange);
    return () => {
      events.off('routeChangeStart', handleRouteChange);
    }
  });

  return <AuthContext.Provider value={isLoginIn}>{children}</AuthContext.Provider>
}

export { AuthProvider, useAuth };