/* eslint-disable @typescript-eslint/no-explicit-any */
export class MovieApi {
  async fetchPopular(page: number, language: string): Promise<any[]> {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(
      `${baseUrl}/movies?page=${page}&language=${language}`
    );
    const data = await res.json();
    return data;
  }
}
