import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import MainView from "./views/MainView";
import DetailView from "./views/DetailView";
import RestaurantListView from "./views/RestaurantListView";

export default [
  // {
  //   path: "/",
  //   exact: true,
  //   layout: DefaultLayout,
  //   component: () => <Redirect to="/" />
  // },
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: MainView
  },
  {
    path: "/detail",
    layout: DefaultLayout,
    component: DetailView
  },
  {
    path: "/list",
    layout: DefaultLayout,
    component: RestaurantListView
  }
  // {
  //   path: "/errors",
  //   layout: DefaultLayout,
  //   component: Errors
  // },
  // {
  //   path: "/components-overview",
  //   layout: DefaultLayout,
  //   component: ComponentsOverview
  // },
  // {
  //   path: "/tables",
  //   layout: DefaultLayout,
  //   component: Tables
  // },
  // {
  //   path: "/blog-posts",
  //   layout: DefaultLayout,
  //   component: BlogPosts
  // }
];
