import { HomePage, Login, Register, NotFound } from "../pages";

export const routes = [
  {
    id: 1,
    path: "/",
    component: HomePage,
  },
  {
    id: 3,
    path: "/login",
    component: Login,
  },
  {
    id: 3,
    path: "/register",
    component: Register,
  },
  {
    id: 4,
    path: "*",
    component: NotFound,
  },
];
