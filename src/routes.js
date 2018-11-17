import React from 'react';
import Write from "./components/Write/Write";
import About from "./components/About/About";

const routes = [
  {
    path: "/",
    exact: true,
    component: Write
  },
  {
    path: "/about",
    props: {},
    component: About
  }
];

export default routes;
