import { createRouter, createWebHistory } from "vue-router";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";

const routes = [
  {
    name: "Sign In",
    path: "/sign-in",
    component: SignIn,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    component: SignUp,
  },
  {
    name: "Home",
    path: "/",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
