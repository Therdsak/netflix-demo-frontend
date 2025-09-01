"use client";

import { useEffect, useState } from "react";
import { useIsMobile } from "@/presentation/hooks/useIsMobile";
import { useAppStore } from "@/presentation/store/useAppStore";
import { Movie } from "@/domain/models/Movie";
import { LoadingSkeleton } from "./loading/LoadingSkeleton";
import BadRequestPage from "../BadRequestPage";
import MobileView from "./HomeClientComponent/MobileView";
import DesktopView from "./HomeClientComponent/DesktopView";
import { useMovies } from "@/presentation/hooks/useMovies";


export default function HomeClientComponent() {
  const { isMobile } = useIsMobile();
  const { language } = useAppStore();
  const { data, isLoading, isError } = useMovies(1, language);

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedMovie(data[0]);
    }
  }, [data]);

  const handleSelectMovie = (movie: Movie) => {
    if (selectedMovie?.id === movie.id) return;
    setSelectedMovie(null);
    setTimeout(() => setSelectedMovie(movie), 120);
  };

  if (isLoading) return <LoadingSkeleton isMobile={isMobile} />;
  if (isError) return <BadRequestPage />;

  if (!data) return null;

  return isMobile ? (
    <MobileView
      selectedMovie={selectedMovie}
      data={data}
      setSelectedMovie={handleSelectMovie}
    />
  ) : (
    <DesktopView
      selectedMovie={selectedMovie}
      data={data}
      setSelectedMovie={handleSelectMovie}
    />
  );
}


