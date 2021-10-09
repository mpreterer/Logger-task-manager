import LoginButton from '../components/loginButton';
import authorization from '../states/authorization';
import profile from '../states/profile';
import ProfileCard from '../components/profileCard';
import Link from 'next/link';

function HomePage() {
  if (authorization.isLogin) {
    return <ProfileCard profile={profile} />;
  }

  return <LoginButton authorization={authorization} />;
}

export default HomePage;
