import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useUser = () => ({ isLogin: typeof process.env.TRELLO_TOKEN !== 'undefined' });

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
