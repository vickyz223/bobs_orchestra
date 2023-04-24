import listingService from "../services/listings";

const Listing = ({ listing }) => {
  const { Title, Type, Date, Image, Description } = listing;
  return (
    <div className="flex items-stretch justify-center ">
      <div className="min-w-2xl max-h-auto flex h-auto flex-col rounded-lg border-[1px] border-gray-300  bg-white shadow-xl sm:flex-row">
        <div className="flex-1 flex-initial">
          <img
            src={Image}
            alt={`${Title} accompaniment`}
            className="h-full w-[12rem] min-w-[18rem] rounded-t-lg sm:max-w-[18rem] sm:rounded-l-lg sm:rounded-r-none sm:object-cover"
          />
        </div>
        <div className="m-5 flex h-full w-[15rem] flex-auto flex-col gap-1 gap-2 sm:w-[20rem]">
          <h1 className="text-2xl font-bold text-gray-900 ">{Title}</h1>
          <p className="text-md text-gray-600">{Type}</p>
          <h3 className="text-md font-semibold text-gray-700">
            {listingService.conversion(Date)}
          </h3>
          <p className="text-base text-gray-700">{Description}</p>
        </div>
      </div>
    </div>
  );
};

export default Listing;
