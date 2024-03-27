/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useState } from "react";

const Gallery = () => {
  const [photos, setPhotos] = useState([
    "src/assets/gallery/g1.jpg",
    "src/assets/gallery/g2.jpg",
    "src/assets/gallery/g3.jpg",
    "src/assets/gallery/g4.jpg",
    "src/assets/gallery/g5.jpg",
    "src/assets/gallery/g6.jpg",
    "src/assets/gallery/g8.jpg",
    "src/assets/gallery/g9.jpg",
    "src/assets/gallery/g10.jpg",
    "src/assets/gallery/g11.jpg",
    "src/assets/gallery/g12.jpg",
    "src/assets/gallery/g13.jpg",
    "src/assets/gallery/g14.jpg",
    "src/assets/gallery/g15.jpg",
    "src/assets/gallery/g16.jpg",
    "src/assets/gallery/g17.jpg",
    "src/assets/gallery/g18.jpg",
    "src/assets/gallery/g19.jpg",
    "src/assets/gallery/g20.jpg",
    "src/assets/gallery/g21.jpg",
    "src/assets/gallery/g22.jpg",
    "src/assets/gallery/g23.jpg",
    "src/assets/gallery/g24.jpg",
    "src/assets/gallery/g25.jpg",

  ]);

  return (
    <>
      <section className="bg-white pt-12 dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Glance of Our Work
          </h1>
          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            "Discover our gallery of beauty transformations. From vibrant hair
            colors to flawless makeup, our work speaks volumes. Get inspired and
            see what we can do for you. Explore now."
          </p>
          <div className="flex items-center justify-center">
            <div className="flex items-center p-1 border border-[#537f3c] dark:border-blue-400 rounded-xl">
              <Link to="/gallery">
                <button className="px-4 py-2 text-sm font-medium bg-[#537f3c] text-white capitalize md:py-3 rounded-xl md:px-12">
                  Makeup
                </button>
              </Link>
              <Link to="/gallery-hairs">
                <button className="px-4 py-2 mx-4 text-sm font-medium text-black capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-[#537f3c] hover:text-white rounded-xl md:mx-8 md:px-12">
                  Hair
                </button>
              </Link>
              <Link to="/other-photos">
                <button className="px-4 py-2 text-sm font-medium text-black capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-[#537f3c] hover:text-white rounded-xl md:px-12">
                  Others
                </button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {photos.map((src, index) => (
              <div
                key={index}
                className="flex overflow-hidden flex-col items-center"
              >
                <img
                  className="h-[500px] bg-zinc-300 w-full"
                  src={src}
                  alt={`Photo ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
