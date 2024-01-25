import RestaurantImages from "../../book/RestaurantImages";
import RestaurantInfoWrapper from "./RestaurantInfoWrapper";

const BookWrapper = () => {
  return (
    <div className="w-full h-fit flex flex-col py-29 gap-12">
      <RestaurantImages />
      <RestaurantInfoWrapper />
    </div>
  );
};

export default BookWrapper;
