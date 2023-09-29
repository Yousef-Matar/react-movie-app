import React, { useRef } from "react";
import {
	Link,
	useLocation,
	useNavigate,
	useSearchParams,
} from "react-router-dom";
const Header = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const searchRef = useRef(null);
	const location = useLocation();
	const navigate = useNavigate();
	return (
		<div className="alert alert-primary">
			<div className="container-fluid">
				<div className="d-flex align-items-center justify-content-between">
					<Link
						style={{ textDecoration: "none" }}
						className="h3 text-nowrap cursor-pointer"
						onClick={() => {
							searchRef.current.value = "";
							searchParams.delete("searchTerm");
							setSearchParams(searchParams);
						}}
					>
						Movie Browser
					</Link>
					<div>
						<input
							type="search"
							ref={searchRef}
							name="movie-search-bar"
							id="movie-search-bar"
							placeholder="Search..."
							className="form-control"
							onKeyPress={(event) => {
								if (event.key === "Enter") {
									if (location.pathname !== "/movies") {
										navigate("/movies");
									}
									if (event.target.value.length === 0) {
										searchParams.delete("searchTerm");
										setSearchParams(searchParams);
									} else {
										setSearchParams({
											searchTerm: event.target.value,
										});
									}
								}
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
