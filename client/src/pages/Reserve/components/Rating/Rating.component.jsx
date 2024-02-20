import { PersonFill } from "react-bootstrap-icons";
import PropTypes from "prop-types";

const RatingComponent = ({ rating }) => {
  const formattedScore = rating.rating_score.toFixed(1);
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full flex gap-5 items-center">
        <div className="flex items-center rounded-full border border-solid border-black p-4">
          <PersonFill className="text-2xl" />
        </div>
        <div className="w-full tracking-wider leading-relaxed">
          <div className="flex divide-x divide-solid divide-black/20">
            <span className="font-montserrat font-bold pr-2.5">
              {rating.User.user_first_name} {rating.User.user_last_name}
            </span>
            <span className="font-raleway font-light text-[#A8A8A8] pl-2.5">
              {rating.countOfRatings}&nbsp;
              {rating.countOfRatings < 2 ? (
                <span>Rating</span>
              ) : (
                <span>Ratings</span>
              )}
            </span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-lg font-raleway font-light text-[#A8A8A8]">
              {rating.rating_date}
            </span>
            <span className="text-2xl font-raleway font-light">
              {formattedScore}
              <span className="text-xl">/10.0</span>
            </span>
          </div>
        </div>
      </div>
      <div>
        <span className="text-lg font-raleway font-light tracking-wider leading-relaxed">
          {rating.rating_comment}
        </span>
      </div>
    </div>
  );
};

RatingComponent.propTypes = {
  rating: PropTypes.shape({
    rating_comment: PropTypes.string.isRequired,
    rating_score: PropTypes.number.isRequired,
    rating_date: PropTypes.string.isRequired,
    User: PropTypes.shape({
      user_first_name: PropTypes.string.isRequired,
      user_last_name: PropTypes.string.isRequired,
    }),
    countOfRatings: PropTypes.number.isRequired,
  }).isRequired,
};

export default RatingComponent;
