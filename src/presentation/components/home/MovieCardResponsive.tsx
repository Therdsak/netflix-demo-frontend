/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { Movie } from "@/domain/models/Movie";

interface MovieCardResponsiveProps {
  movie: Movie;
  index: number;
  setSelectedMovie: (movie: Movie) => void;
  isMobile: boolean;
}

const MovieCardResponsive: React.FC<MovieCardResponsiveProps> = ({
  movie,
  index,
  setSelectedMovie,
  isMobile,
}) => {

  const containerWidth = isMobile ? "w-[160px]" : "w-[240px] md:w-[320px]";
  const aspectRatioClass = isMobile ? "aspect-[2/3]" : "aspect-video";
  const paddingX = isMobile ? "px-2" : "px-4";

  return (
    <div
      key={movie.id}
      onClick={() => setSelectedMovie(movie)}
      className={`relative flex-shrink-0 cursor-pointer ${containerWidth} ${paddingX}`}
    >
      <motion.div
        layoutId={`card-container-${movie.id}`}
        className={`relative w-full ${aspectRatioClass} overflow-hidden rounded-md shadow bg-gray-200 dark:bg-gray-700`}
        whileHover={!isMobile ? { scale: 1.05 } : undefined}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <img
          src={"/netflix.png"}
          alt={"netflix"}
          width={12}
          height={12}
          className="absolute top-2 left-4 z-10"
        />

        {index < 10 && (
          <img
            src={"/top10.png"}
            alt={"top10"}
            width={36}
            height={36}
            className="absolute top-0 right-0 z-10"
          />
        )}

        <motion.img
          layoutId={`card-image-${movie.id}`}
          src={movie.backdrop_path}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

     
    </div>
  );
};

export default MovieCardResponsive;
