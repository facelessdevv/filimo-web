import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.pic} alt={movie.title} />
            <h4>{movie.title}</h4>
        </div>
    );
};

export default MovieCard;
