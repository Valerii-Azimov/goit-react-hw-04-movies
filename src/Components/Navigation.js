import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navigation.module.css";

const Navigation = () => (
  <nav className={style.navigation}>
    <ul className={style.navigationList}>
      <li className={style.navigationListItem}>
        <NavLink
          exact
          to="/"
          className={style.navigationLink}
          activeClassName={style.navigationLinkActive}
        >
          Home
        </NavLink>
      </li>
      <li className={style.navigationListItem}>
        <NavLink
          to="/movies"
          className={style.navigationLink}
          activeClassName={style.navigationLinkActive}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
