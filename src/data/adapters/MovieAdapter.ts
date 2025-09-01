/* eslint-disable @typescript-eslint/no-explicit-any */
import { Movie } from "@/domain/models/Movie";

export const mapToMovieModel = (raw: any): Movie => ({
  ...raw,
});
