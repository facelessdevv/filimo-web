// src/storage/likeStorage.ts
const KEY = "liked_movies";

export function getLikedMovies(): Record<string, boolean> {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
}

export function toggleLike(id: string) {
    const likes = getLikedMovies();
    likes[id] = !likes[id];
    localStorage.setItem(KEY, JSON.stringify(likes));
    return likes[id];
}
