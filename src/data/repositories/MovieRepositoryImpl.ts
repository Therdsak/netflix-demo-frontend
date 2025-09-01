import { Movie } from "@/domain/models/Movie";
import { MovieApi } from "../datasources/MovieApi";
import { mapToMovieModel } from "../adapters/MovieAdapter";
import { MovieRepository } from "./MovieRepository";

export class MovieRepositoryImpl implements MovieRepository {
  constructor(private api: MovieApi) {}

  async getPopularMovies(page: number, language: string): Promise<Movie[]> {
    const rawData = await this.api.fetchPopular(page, language);
    return rawData.map(mapToMovieModel);
  }
}
