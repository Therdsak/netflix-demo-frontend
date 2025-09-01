import { Movie } from "@/domain/models/Movie";

export interface MovieRepository {
  getPopularMovies(page: number, language: string): Promise<Movie[]>;
}
