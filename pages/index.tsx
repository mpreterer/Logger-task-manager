import LoginButton from '../components/loginButton';
import authorization from '../states/authorization';
import ProfileCard from '../components/profileCard';

function HomePage() {
  if (authorization.isLogin) {
    return <ProfileCard />;
  }

  return <LoginButton />;
}

export default HomePage;
