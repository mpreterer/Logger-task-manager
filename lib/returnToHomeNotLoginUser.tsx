import { useRouter } from 'next/router';
import { useEffect } from 'react';

import storage from '../storage/storage';

const useUser = () => ({ isLogin: storage.authorization.isLogin });

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
