import Listing from './Listing'
import '../styles/Homepage.css'

const HomePage = ({listings}) => {
    return (
      <div className="p-20 min-h-screen flex bg-sky-50 gap-8 flex-col w-screen w-xl">
        {listings.map((listing) => (
          <Listing listing={listing} key={`${listing.Title}-${listing.Date}`} />
        ))}
      </div>
    );
}

export default HomePage