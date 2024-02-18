import {
  RestaurantImages,
  RestaurantInfoHeader,
  RestaurantInfoLinks,
  RestaurantDescription,
  RestaurantMenu,
  RestaurantRatings,
  RestaurantFooter,
} from "./layout";

import { Line } from "../../components";

import { Header, Footer } from "../../layout";

const Reserve = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default Reserve;
