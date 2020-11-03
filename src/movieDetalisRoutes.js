import { lazy } from "react";

const detailsRoutes = [
  {
    path: "/cast",
    label: "Cast",
    exact: false,
    component: lazy(() =>
      import("./views/Cast.js" /* webpackChunkName: 'cast-view'*/)
    ),
  },
  {
    path: "/reviews",
    label: "Reviews",
    exact: false,
    component: lazy(() =>
      import("./views/Reviews.js" /* webpackChunkName: 'reviews-view'*/)
    ),
  },
];

export default detailsRoutes;
