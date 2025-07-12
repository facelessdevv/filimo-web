import { useEffect, useState } from "react";
import { getLikedMovies } from "../utils/storage.js";
import { hardcodedResponse } from "../api/hardcoded.js";

export const useMovieFetcher = () => {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        const liked = getLikedMovies();

        const formattedRows = (hardcodedResponse.data?.rows || []).map((row) => ({
            title: row.title || "بدون عنوان",
            movies: (row.movies || []).map(movie => ({
                ...movie,
                liked: liked.includes(movie.link_key)
            }))
        }));

        setSections(formattedRows);
    }, []);

    return [sections, setSections];
};
