import { useEffect, useState } from "react";
import axios from "axios";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const getAllReviews = async () => {
    try {
      const res = await axios.get("https://salon-server-jupe.onrender.com/review/getreview");
      setReviews(res.data.reviews);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllReviews();
  }, []);

  const handleDeleteReview = async (id) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this review?"
    );
    if (!shouldDelete) return;

    try {
      await axios.delete("https://salon-server-jupe.onrender.com/review/deletereview", {
        data: { id },
      });
      setReviews(reviews.filter((review) => review._id !== id));
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div className="flex gap-6 flex-wrap justify-center">
      {reviews.map((review) => (
        <div
          key={review._id}
          className="w-full max-w-sm px-4 py-3 flex justify-between flex-col bg-white rounded-md shadow-md"
        >
          <div>
            <h1 className="mt-2 text-lg font-semibold text-gray-800">
              {review.name}
            </h1>
            <p className="mt-2 text-sm text-gray-600">{review.message}</p>
          </div>
          <button
            className="bg-red-400 my-4 py-2 rounded-xl"
            onClick={() => handleDeleteReview(review._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
