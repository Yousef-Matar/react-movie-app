import React, { Component } from "react";
import ReactDOM from "react-dom/client";
// Routing
import {
	Navigate,
	Outlet,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
// Components
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import MovieDetails from "./components/Movies/util/MovieDetails/MovieDetails";
import Header from "./components/Navigation/Header";
const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};
const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				exact: true,
				element: <Home />,
			},
			{
				path: "movies",
				element: <Movies />,
			},
			{
				path: "details",
				element: <MovieDetails />,
			},
			{
				path: "*",
				element: <Navigate to="/" />,
			},
		],
	},
]);
const App = () => {
	return <RouterProvider router={router} />;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// Examples

