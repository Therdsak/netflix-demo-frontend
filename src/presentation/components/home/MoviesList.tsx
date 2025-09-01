import { Movie } from "@/domain/models/Movie";
import MovieCardResponsive from "./MovieCardResponsive";

type MovieListProps = {
  data: Movie[] | undefined;
  isMobile: boolean;
  setSelectedMovie: (movie: Movie) => void;
};

export default function MovieList({
  data,
  isMobile,
  setSelectedMovie,
}: MovieListProps) {
  return (
    <div>
      <h2
        className={`text-xl font-bold mb-4 text-white text-start ${
          isMobile ? "px-2" : "px-8"
        }`}
      >
        Popular on Netflix
      </h2>
      <div
        className={`flex overflow-x-auto overflow-y-hidden scrollbar-hide ${
          isMobile ? "" : "px-4"
        }`}
      >
        {data?.map((movie, index) => (
          <MovieCardResponsive
            key={movie.id}
            movie={movie}
            index={index}
            setSelectedMovie={setSelectedMovie}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
}
