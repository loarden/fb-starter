import { GoogleAuthProvider, signInWithPopup }
  from "firebase/auth";

import auth from './auth';

function Login() {
  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  return (
    <button onClick={handleLogin}>
      Sign In With Google
    </button>
  )
}

export default Login;
