import { useRouter } from 'next/router';
import { useEffect } from 'react';

import authorization from '../states/authorization';

const useUser = () => ({ isLogin: authorization.isLogin });

function returnToHomeNotLoginUser() {
  const { isLogin } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push('/');
    }
  }, [isLogin]);

  return <p>Redirecting...</p>;
}

export default returnToHomeNotLoginUser;
