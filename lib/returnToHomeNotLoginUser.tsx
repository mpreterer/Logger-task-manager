import { useRouter } from 'next/router';

import authorization from '../states/authorization';

function returnToHomeNotLoginUser() {
  if (authorization.isLogin) {
    return <div>loading...</div>;
  }

  const router = useRouter();

  (() => {
    router.push('/');
  })();
}

export default returnToHomeNotLoginUser;
