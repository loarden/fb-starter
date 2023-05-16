import { signOut } from "firebase/auth";
import auth from "./Firebase/auth";
import Login from "./Components/Login";
import Feed from "./Components/Feed";
import { useAuth } from "./Context/AuthContect";

function App() {
  const user = useAuth()

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
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  );
}

export default App;
