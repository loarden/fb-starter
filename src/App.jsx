import Login from "./Components/Login";
import Feed from "./Components/Feed";
import { useAuth } from "./Context/AuthContect";
import Navbar from "./Components/Navbar"

function App() {
  const user = useAuth()

  return (
    <div>
      <Navbar />
      {user ? <Feed user={user} /> : <Login />}
    </div>
  );
}

export default App;
