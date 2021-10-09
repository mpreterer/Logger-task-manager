import LoginButton from '../components/loginButton';
import authorization from '../states/authorization';
import profile from '../states/profile';
import ProfileCard from '../components/profileCard';

function HomePage() {
  return (
    <>
      <ProfileCard profile={profile} />
      <LoginButton authorization={authorization} />
    </>
  );
}

export default HomePage;
