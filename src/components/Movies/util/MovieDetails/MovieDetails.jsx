import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const MovieDetails = () => {
	const [movie, setMovie] = useState({});
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();
	const getMovie = () => {
		let movieID = searchParams.get("movieID");
		if (
			!typeof movieID === "string" ||
			(typeof movieID === "string" && movieID.length === 0)
		) {
			movieID = null;
		}
		// Api get
		Axios.get(`https://www.omdbapi.com?apikey=2708d1&i=${movieID}`).then(
			(response) => {
				setMovie(response.data);
			}
		);
	};
	useEffect(() => {
		getMovie();
	}, [searchParams.get("movieID")]);
	return (
		<div className="container">
			<div className="row flex-wrap gy-4">
				<div className="col-md-4">
					<img
						src={movie.Poster}
						alt={movie.Title}
						className="img img-thumbnail"
					/>
				</div>
				<div className="col-md-8">
					<h1>{movie.Title}</h1>
					<table className="table">
						<tbody>
							<tr>
								<td>Director</td>
								<td>{movie.Director}</td>
							</tr>
							<tr>
								<td>Plot</td>
								<td>{movie.Plot}</td>
							</tr>
							<tr>
								<td>Year</td>
								<td>{movie.Year}</td>
							</tr>
							<tr>
								<td>Language</td>
								<td>{movie.Language}</td>
							</tr>
							<tr>
								<td>Writer</td>
								<td>{movie.Writer}</td>
							</tr>
							<tr>
								<td>Awards</td>
								<td>{movie.Awards}</td>
							</tr>
							<tr>
								<td>Genre</td>
								<td>{movie.Genre}</td>
							</tr>
							<tr>
								<td>Actors</td>
								<td>{movie.Actors}</td>
							</tr>
							<tr>
								<td>Box office</td>
								<td>{movie.BoxOffice}</td>
							</tr>
							<tr>
								<td>Released</td>
								<td>{movie.Released}</td>
							</tr>
						</tbody>
					</table>
					<button
						className="btn btn-primary"
						onClick={() => {
							navigate("/movies");
							setSearchParams({
								searchTerm: searchParams.get("searchTerm"),
							});
						}}
					>
						Back
					</button>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
