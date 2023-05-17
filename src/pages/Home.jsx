import Login from "../Components/Login";
import Feed from "../Components/Feed";
import { useAuth } from "../Context/AuthContect";

function Home() {
  const user = useAuth()

  return (
    <>
      {user ? <Feed user={user} /> : <Login />}
    </>
  )
}

export default Home;