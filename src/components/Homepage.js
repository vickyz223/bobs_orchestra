import Listing from './Listing'

const HomePage = ({listings}) => {
    return (
      <div>
        {listings.map(listing => <Listing listing={listing} key={`${listing.Title}-${listing.Type}`}/>)}
      </div>
    );
}

export default HomePage