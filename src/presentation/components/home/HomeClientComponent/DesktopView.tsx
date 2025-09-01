import { Movie } from "@/domain/models/Movie";
import FullscreenMovieOverlay from "../FullscreenMovieOverlay";
import MovieDetailDesktopOverlay from "../MovieDetailDesktopOverlay";
import MovieList from "../MoviesList";
import Header from "../../header/Header";

type Props = {
  selectedMovie: Movie | null;
  data: Movie[];
  setSelectedMovie: (movie: Movie) => void;
};

export default function DesktopView({
  selectedMovie,
  data,
  setSelectedMovie,
}: Props) {
  const selectedIndex = data.findIndex((m) => m.id === selectedMovie?.id);

  return (
    <div className="relative px-4 py-6 min-h-screen bg-background w-full">
      <FullscreenMovieOverlay isMobile={false} movie={selectedMovie} />

      <div className="fixed top-0 left-0 right-0 bg-background z-100 py-4 flex items-start justify-start">
        <Header />
      </div>

      {selectedMovie && (
        <MovieDetailDesktopOverlay
          selectedMovie={selectedMovie}
          selectedIndex={selectedIndex}
          onPlay={() => console.log("Play clicked")}
          onMoreInfo={() => console.log("More Info clicked")}
        />
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-background shadow-md z-50 py-4 flex flex-col">
        <MovieList
          data={data}
          isMobile={false}
          setSelectedMovie={setSelectedMovie}
        />
      </div>
    </div>
  );
}
