import React from "react";
import MovieCard from "./MovieCard.js";

const MovieSection = ({ title, movies }) => {
    return (
        <div className="movie-section">
            <div className="section-header">
                <h2>{title}</h2>
                <a href="#">مشاهده همه &lt;</a>
            </div>
            <div className="movie-row">
                {movies.map((movie) => (
                    <MovieCard key={movie.link_key} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieSection;
