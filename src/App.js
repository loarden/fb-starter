import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./auth";
import Login from "./Login";
import Feed from "./Feed";

function App() {
  const [user] = useAuthState(auth);

  return <div>
    {
    user ?
      <Feed user={user} /> :
      <Login />
    }
    </div>;
}

export default App;
