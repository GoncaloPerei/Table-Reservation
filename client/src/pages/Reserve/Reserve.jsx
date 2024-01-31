// import React from "react";
import {
  RestaurantImages,
  RestaurantInfoHeader,
  RestaurantInfoLinks,
  RestaurantDescription,
  RestaurantMenu,
  RestaurantRatings,
  RestaurantFooter,
} from ".";

import { Line } from "./components";

function Reserve() {
  return (
    <div className="w-full h-fit flex flex-col py-28 gap-12">
      <RestaurantImages />
      <div className="h-fit flex flex-col gap-10 mx-48">
        <RestaurantInfoHeader />
        <RestaurantInfoLinks />
        <RestaurantDescription />
        <Line />
        <RestaurantMenu />
        <Line />
        <RestaurantRatings />
        <Line />
        <RestaurantFooter />
      </div>
    </div>
  );
}

export default Reserve;
