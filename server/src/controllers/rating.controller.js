const { Ratings, Users } = require("../models");

class Rating {
  static async getAll(req, res) {
    try {
      const ratings = await Ratings.findAll({
        include: [
          {
            model: Users,
            attributes: ["user_first_name", "user_last_name"],
            required: false,
          },
        ],
        order: [["rating_date", "DESC"]],
      });

      const ratingsWithCount = await Promise.all(
        ratings.map(async (rating) => {
          const userId = rating.UserId;
          const countOfRatings = await Ratings.count({
            where: {
              UserId: userId,
            },
          });

          return {
            ...rating.toJSON(),
            countOfRatings: countOfRatings,
          };
        })
      );

      res.status(200).json(ratingsWithCount);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Failed to fetch ratings", error: err.message });
    }
  }

  static async create(req, res) {
    const rating = {
      rating_comment: req.body.rating_comment,
      rating_score: req.body.rating_score,
      rating_date: req.body.rating_date,
      UserId: req.user.id,
    };
    try {
      const newRating = await Ratings.create(rating);
      res
        .status(201)
        .json({ message: "Rating successfully created", rating: newRating });
    } catch (err) {
      res.status(500).json({ message: "Failed to create rating", error: err });
    }
  }

  static async sumScore(req, res) {
    try {
      const totalScore = await Ratings.sum("rating_score");
      const totalRatings = await Ratings.count();

      const averageScore = totalRatings > 0 ? totalScore / totalRatings : 0;
      res.status(200).json({ averageScore });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Failed to sum scores", error: err.message });
    }
  }
}

module.exports = {
  Rating,
};
