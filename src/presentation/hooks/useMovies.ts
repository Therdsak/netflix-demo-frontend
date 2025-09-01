import { useQuery } from "@tanstack/react-query";
import { Movie } from "@/domain/models/Movie";
import { GetMoviesUseCase } from "@/domain/usecases/GetMovies";
import { MovieApi } from "@/data/datasources/MovieApi";
import { MovieRepositoryImpl } from "@/data/repositories/MovieRepositoryImpl";

const movieUseCase = new GetMoviesUseCase(
  new MovieRepositoryImpl(new MovieApi())
);

export const useMovies = (page: number, language: string) => {
  return useQuery<Movie[]>({
    queryKey: ["movies", page, language],
    queryFn: () => movieUseCase.execute(page, language),
  });
};