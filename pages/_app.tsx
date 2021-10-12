import '../styles/global.css';
import Header from '../components/header';

function App({ Component }) {
  return (
    <>
      <Header />
      <Component />
    </>
  );
}

export default App;
