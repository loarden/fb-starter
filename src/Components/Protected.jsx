import { useEffect } from "react";
import { useAuth } from "../Context/AuthContect";
import { useNavigate } from "react-router-dom";

function Protected(props) {
  const children = props.children;
  const navigate = useNavigate();
  const user = useAuth();

  useEffect(() => {
    if(!user){
      navigate('/');
    }
  }, [user, navigate])


  if(!user) {
    return null;
  }

  return (
    <>
      {children}
    </>
  )
}

export default Protected;