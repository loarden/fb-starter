import { Link } from "react-router-dom";
import { useAuth, useSignOut } from "../Context/AuthContect"

function Navbar() {
  const user = useAuth()
  const signOut = useSignOut();

  return  (
    <nav className="navbar mb-4" style={{ backgroundColor: "#f7df1e" }}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 flex-grow-1">
          <Link to="/">Brewitter</Link>
        </span>
        <Link className="btn btn-secondary" to="/about">
          About
        </Link>
        {user && (
          <button className="btn btn-secondary ms-2" onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </nav>
  ) 
}

export default Navbar;