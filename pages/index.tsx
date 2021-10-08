import LoginButton from '../components/loginButton';
import authorization from '../states/authorization';

function HomePage() {
  return <LoginButton authorization={authorization} />;
}

export default HomePage;
