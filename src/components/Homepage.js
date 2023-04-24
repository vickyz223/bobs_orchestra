import Listing from "./Listing";
import "../styles/Homepage.css";

const HomePage = ({ listings }) => {
  return (
    <div className="w-xl flex min-h-screen w-screen flex-col gap-8 bg-sky-50 p-20">
      {listings.map((listing) => (
        <Listing listing={listing} key={`${listing.Title}-${listing.Date}`} />
      ))}
    </div>
  );
};

export default HomePage;
