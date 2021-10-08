import LoginButton from '../components/loginButton';
import authorization from '../states/authorization';
import Link from 'next/link';

function HomePage() {
  if (authorization.isLogin) {
    return (
      <>
        <Link href="/">
          <a>Home</a>
        </Link>
      </>
    );
  }

  return (
    <>
      <LoginButton authorization={authorization} />
    </>
  );
}

export default HomePage;
