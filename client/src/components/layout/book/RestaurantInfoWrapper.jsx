import RestaurantInfoHeader from "../../book/RestaurantInfoHeader";
import RestaurantInfoLinks from "../../book/RestaurantInfoLinks";

const RestaurantInfoWrapper = () => {
  return (
    <div className="h-fit flex flex-col gap-10 mx-48">
      <RestaurantInfoHeader />
      <RestaurantInfoLinks />
    </div>
  );
};

export default RestaurantInfoWrapper;
