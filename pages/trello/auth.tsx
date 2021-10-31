import React, { useEffect } from 'react';

const Auth = () => {

  useEffect(() => {
    const hash: string = window.location.hash;
    
    if (hash !== '') {
      localStorage.setItem('token', hash.slice(7));
      window.location.href = '/';
    }
  });

  return <>Redirect...</>;
};

export default Auth;