import { observer } from 'mobx-react';

const LoginButton = observer(({ authorization }) => (
  <button onClick={() => authorization.login()}>{String(authorization.isLogin)}</button>
));

// function LoginButton() {
//   <VLoginButton authorization={mauthorization} />;
// }

export default LoginButton;
