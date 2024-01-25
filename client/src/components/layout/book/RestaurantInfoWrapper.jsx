import RestaurantInfoHeader from "../../book/RestaurantInfoHeader";
import RestaurantInfoLinks from "../../book/RestaurantInfoLinks";
import RestaurantMainMenu from "../../book/main/RestaurantMainMenu";

const RestaurantInfoWrapper = () => {
  return (
    <div className="h-fit flex flex-col gap-10 mx-48">
      <RestaurantInfoHeader />
      <RestaurantInfoLinks />
      <RestaurantMainMenu />
    </div>
  );
};

export default RestaurantInfoWrapper;
