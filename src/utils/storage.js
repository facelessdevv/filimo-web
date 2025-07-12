const STORAGE_KEY = "liked_movies";

export const getLikedMovies = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

export const updateLikedMovies = (linkKey, liked) => {
    let current = getLikedMovies();
    if (liked && !current.includes(linkKey)) {
        current.push(linkKey);
    } else if (!liked) {
        current = current.filter(k => k !== linkKey);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
};
