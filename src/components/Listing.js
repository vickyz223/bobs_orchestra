const Listing = ({listing}) => {
    const {Title, Type, Dates, Image, Description} = listing
    return (
      <div>
        <h1>{Title}</h1>
        <p>{Type}</p>
        <h3>Dates</h3>
        {Dates.map(date => <p id={`${date}`} >{date}</p>)}
        <img src={Image} alt="picture of a concert" />
        <p>{Description}</p>
      </div>
    );
}

export default Listing