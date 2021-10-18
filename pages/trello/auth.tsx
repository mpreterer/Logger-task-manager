import { useRouter } from "next/router";
import { useEffect } from "react";

import AuthService from "../../services/trello/AuthService";

const Auth = () => {
  const router = useRouter();

  // Browser side
  useEffect(() => {
    const tokenHashName = 'token';
    const urlHash = router.asPath.replace(router.pathname, '');
    const token = urlHash.replace(tokenHashName, '').replace(/[\s#=]/g, '');
    const isToken = token !== '';

    if(isToken) {
      AuthService.saveToken(token); // save the token to localStorage
    }
    
    window.location.href = '/'; // redirect to the home page
  })

  return (<>Загрузка...</>);
}

export default Auth;