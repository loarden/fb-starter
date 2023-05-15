import { useCollectionData } from 'react-firebase-hooks/firestore';
import store from './firestore';
import { collection, query } from 'firebase/firestore';

const beerRef = collection(store, 'beer-feed');
const beerQuery = query(beerRef);

function Feed() {
  const [items, loading] = useCollectionData(beerQuery);

  if (loading === true) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Wall of Beers</h1>
      {items.map((item, index) => (
        <div key={index}>
          <h2>{item.beer}</h2>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  )
}

export default Feed;