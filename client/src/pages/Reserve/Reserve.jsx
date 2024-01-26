// import React from "react";
import {
  RestaurantImages,
  RestaurantInfoHeader,
  RestaurantInfoLinks,
  RestaurantNavbar,
  RestaurantDescription,
  RestaurantMenu,
  Line,
  RestaurantRatings,
} from ".";

function Reserve() {
  return (
    <div className="w-full h-fit flex flex-col py-29 gap-12">
      <RestaurantImages />
      <div className="h-fit flex flex-col gap-10 mx-48">
        <RestaurantInfoHeader />
        <RestaurantInfoLinks />
        <RestaurantNavbar />
        <RestaurantDescription />
        <Line />
        <RestaurantMenu />
        <Line />
        <RestaurantRatings />
        <Line />
      </div>
    </div>
  );
}

export default Reserve;
