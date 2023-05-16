import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "./auth";
import Login from "./Login";
import Feed from "./Feed";

function App() {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div>
      <nav className="navbar mb-4" style={{ backgroundColor: "#f7df1e" }}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Brewitter</span>
          {user && (
            <button className="btn btn-secondary" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </nav>
      {user ? <Feed user={user} /> : <Login />}
    </div>
  );
}

export default App;
