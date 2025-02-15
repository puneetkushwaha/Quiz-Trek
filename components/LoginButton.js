import { signInWithGoogle, logout } from "../firebase/firebaseAuth";

const LoginButton = () => {
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default LoginButton;
