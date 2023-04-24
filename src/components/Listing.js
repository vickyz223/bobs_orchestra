import listingService from '../services/listings'

const Listing = ({listing}) => {
    const {Title, Type, Date, Image, Description} = listing
    return (
      <div className="flex justify-center items-stretch ">
        <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-xl h-auto min-w-2xl  max-h-auto border-[1px] border-gray-300">
          <div className="flex-initial flex-1">
            <img
              src={Image}
              alt="conductor leading a band in a concert hall"
              className="w-[12rem] rounded-t-lg sm:object-cover sm:rounded-l-lg sm:rounded-r-none h-full min-w-[18rem] sm:max-w-[18rem]"
            />
          </div>
          <div className="w-[15rem] gap-1 flex flex-col flex-auto gap-2 h-full sm:w-[20rem] m-5">
            <h1 className="text-gray-900 font-bold text-2xl ">{Title}</h1>
            <p className="text-md text-gray-600">{Type}</p>
            <h3 className="text-md font-semibold text-gray-700">
              {listingService.conversion(Date)}
            </h3>
            <p className="text-gray-700 text-base">{Description}</p>
          </div>
        </div>
      </div>
    );
}

export default Listing