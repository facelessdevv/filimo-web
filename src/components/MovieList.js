import React from "react";
import { useMovieFetcher } from "../hooks/useMovieFetcher.js";
import MovieSection from "./MovieSection.js";

const MovieList = () => {
    const [sections] = useMovieFetcher();

    return (
        <div>
            {sections.map((section, index) => (
                <MovieSection key={index} title={section.title} movies={section.movies} />
            ))}
        </div>
    );
};

export default MovieList;
