import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
  collection,
  query,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
  increment,
  getDoc,
  setDoc,
  arrayUnion,
} from "firebase/firestore";
import store from "../Firebase/firestore";
import BeerCard from "./BeerCard";
import BeerMessage from "./BeerMessage";
import { useAuth } from "../Context/AuthContect";

const beerConvert = {
  fromFirestore: (snap) => ({
    id: snap.id,
    ...snap.data(),
  }),
  toFirestore: (doc) => doc,
};

const beerRef = collection(store, "beer-feed").withConverter(beerConvert);
const beerQuery = query(beerRef);

function Feed() {
  const user = useAuth();
  const [likeLoading, setLikeLoading] = useState("");
  const [items, loading] = useCollectionData(beerQuery);

  const handleSendMessage = async (message) => {
    await addDoc(beerRef, {
      ...message,
      createdAt: serverTimestamp(),
      userPhotoURL: user.photoURL,
      uid: user.uid,
    });
  };

  const handleLike = async (id) => {
    setLikeLoading(id);

    const userLikesRef = doc(store, "user-likes", user.uid);
    const userLikesDoc = await getDoc(userLikesRef);

    if (userLikesDoc.exists()) {
      const userLikesData = userLikesDoc.data();
      if (userLikesData.likes.includes(id)) {
        setLikeLoading("");
        return;
      }
    }

    await setDoc(
      userLikesRef,
      {
        likes: arrayUnion(id),
      },
      { merge: true }
    );

    const messageRef = doc(store, "beer-feed", id);

    await updateDoc(messageRef, {
      likes: increment(1),
    });

    setLikeLoading("");
  };

  if (loading === true) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container d-flex flex-column gap-2">
      <BeerMessage onSend={handleSendMessage} />
      {items.map((item) => (
        <BeerCard
          likeDisabled={item.id === likeLoading}
          onLike={handleLike}
          entry={item}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default Feed;