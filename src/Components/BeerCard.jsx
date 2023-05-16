function BeerCard(props) {
  const entry = props.entry;

  return (
    <div className="card">
      <div className="card-header d-flex align-items-center">
        <h2 className="flex-grow-1 m-0">{entry.beer}</h2>
        {/* <h5 className="flex-grow m-0 fs">{entry.displayName}</h5> */}
        <img style={{ width: '50px', height:'50px'}} className="rounded-circle shadow-4-strong" referrerPolicy="no-referrer" src={entry.userPhotoURL} alt="User"/>
      </div>
      <div className="card-body">
        <p>{entry.message}</p>
      </div>
      <div className="card-footer">
        The beer type was: <span className="fw-bold">{entry.type}</span>
      </div>
    </div>
  );
}

export default BeerCard;
