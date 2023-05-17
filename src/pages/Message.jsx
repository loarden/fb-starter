import { doc } from "firebase/firestore"
import { useParams } from "react-router-dom";
import { useDocument } from "react-firebase-hooks/firestore";
import store from "../Firebase/firestore"
import Error from "../Components/Error";

function Message() {
  const { id } = useParams()

  const [value, loading, error] = useDocument(
    doc(store, 'beer-feed', id)
  )

  if(loading) {
    return (
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    )
  }

  if(error) {
    return (
      <Error className="container">
        Something wrong happend!
      </Error>
    )
  }

  const data = value.data();

  if(!data) {
    return (
      <Error className="container">
        Not Found!
      </Error>
    )
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card body">
          <h1 className="border-bottom display-1">{data.beer}</h1>
          <h1 className="display-6">{data.type}</h1>
          <div className="d-flex gap-2">
            <img src={data.userPhotoURL} alt="user" referrerPolicy="no-referrer"/>
            <p>
              {data.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message;