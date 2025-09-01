import { MovieRepository } from "@/data/repositories/MovieRepository";
import { Movie } from "../models/Movie";

export class GetMoviesUseCase {
  constructor(private movieRepo: MovieRepository) {}

  async execute(page: number, language: string): Promise<Movie[]> {
    return await this.movieRepo.getPopularMovies(page, language);
  }
}
