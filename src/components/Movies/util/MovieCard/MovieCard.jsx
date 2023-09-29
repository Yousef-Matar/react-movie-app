import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./MovieCard.scss";
const MovieCard = ({ movie }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();
	return (
		<div
			className="card movie-card cursor-pointer"
			onClick={() => {
				navigate("/details");
				setSearchParams({
					movieID: movie.imdbID,
					searchTerm: searchParams.get("searchTerm"),
				});
			}}
		>
			<img
				className="card-img-top img-fluid"
				src={movie.Poster}
				alt={movie.title}
				draggable="false"
			/>
			<div className="card-body">
				<div className="card-title text-break">{movie.Title}</div>
				<div className="card-text text-break">{movie.Year}</div>
			</div>
		</div>
	);
};

export default MovieCard;
