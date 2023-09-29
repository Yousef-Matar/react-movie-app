import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "./util/MovieCard/MovieCard";

const Movies = () => {
	const [movies, setMovies] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const getMovies = () => {
		let searchTerm = searchParams.get("searchTerm");
		if (
			!typeof searchTerm === "string" ||
			(typeof searchTerm === "string" && searchTerm.length === 0)
		) {
			searchTerm = null;
		}
		// Api get
		Axios.get(`https://www.omdbapi.com/?apikey=2708d1&s=${searchTerm}`).then(
			(response) => {
				setMovies(response.data.Search);
			}
		);
	};
	useEffect(() => {
		getMovies();
	}, [searchParams.get("searchTerm")]);
	return (
		<div className="container">
			<div className="row flex-wrap gy-4">
				{movies?.length ? (
					movies.map((movie, index) => {
						return (
							<div className="col-4" key={movie.imdbID}>
								<MovieCard movie={movie} />
							</div>
						);
					})
				) : (
					<div className="col-12 text-center">
						<h1>No Movies Found</h1>
					</div>
				)}
			</div>
		</div>
	);
};

export default Movies;
