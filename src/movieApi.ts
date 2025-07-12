// src/api/movieApi.ts
const BASE_URL = "https://www.filimo.com/api/fa/v1/movie/movie/list/tagid/1";
const HEADERS = { JsonType: "simple" };

export async function fetchMovies(url: string = BASE_URL) {
  const response = await fetch(url, { headers: HEADERS });
  if (!response.ok) throw new Error("Network error");
  return response.json();
}
