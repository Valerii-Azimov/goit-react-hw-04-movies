import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import Home from "../views/Home";
// import Movies from "../views/MoviesPage";
// import NotFound from "../views/NotFoundView";
// import MovieDetailsPage from "../views/MovieDetailsPage";
import Navigation from "./Navigation";
import BaseRoutes from "../baseRoutes";
const App = () => (
  <>
    <Navigation />
    <Suspense fallback={<h2>...Loading</h2>}>
      <Switch>
        {BaseRoutes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
        {/* <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} /> */}
        <Redirect to="/" />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Suspense>
  </>
);

export default App;
