import { Movie } from "@/domain/models/Movie";
import FullscreenMovieOverlay from "../FullscreenMovieOverlay";
import MovieDetailMobileOverlay from "../MovieDetailMobileOverlay";
import MovieList from "../MoviesList";
import Header from "../../header/Header";

type Props = {
  selectedMovie: Movie | null;
  data: Movie[];
  setSelectedMovie: (movie: Movie) => void;
};

export default function MobileView({
  selectedMovie,
  data,
  setSelectedMovie,
}: Props) {
  return (
    <div className="relative px-4 py-6 min-h-screen bg-background w-full">
      <FullscreenMovieOverlay isMobile={true} movie={selectedMovie} />

      <div className="fixed top-0 left-0 right-0 bg-background z-100 py-4 flex items-start justify-start">
        <Header />
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-background shadow-md z-50 py-4 flex flex-col">
        <MovieDetailMobileOverlay selectedMovie={selectedMovie} />
        <MovieList
          data={data}
          isMobile={true}
          setSelectedMovie={setSelectedMovie}
        />
      </div>
    </div>
  );
}
