import { lazy } from "react";

const routes = [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() =>
      import("./views/Home.js" /* webpackChunkName: 'home-view'*/)
    ),
  },
  {
    path: "/movies",
    label: "Movies",
    exact: true,
    component: lazy(() =>
      import("./views/MoviesPage.js" /* webpackChunkName: 'movies-view'*/)
    ),
  },
  {
    path: "/movies/:movieId",
    label: "MovieDetails",
    exact: false,
    component: lazy(() =>
      import(
        "./views/MovieDetailsPage.js" /* webpackChunkName: 'movieDetails-view'*/
      )
    ),
  },
];

export default routes;
