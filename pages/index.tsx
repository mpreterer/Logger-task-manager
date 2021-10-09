import LoginButton from '../components/loginButton';
import authorization from '../states/authorization';
import profile from '../states/profile';
import ProfileCard from '../components/profileCard';

function HomePage() {
  if (authorization.isLogin) {
    return <ProfileCard profile={profile} />;
  }

  return <LoginButton authorization={authorization} />;
}

setInterval(() => {
  profile.getData();
}, 1000);

export default HomePage;
