import { createRouter, createWebHistory } from "vue-router";
import ContactView from "@/views/ContactView.vue";
import SignupView from "@/views/SignupView.vue";
import LoginView from "@/views/LoginView.vue";
import WishListView from "@/views/WishListView.vue";
import CartView from "@/views/CartView.vue";
import CheckOut from "@/views/CheckOut.vue";
import AccountView from "@/views/AccountView.vue";
import ProductDetailsView from "@/views/ProductDetailsView.vue";
import AboutView from "@/views/AboutView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    redirect: "/login",
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
    meta: { requiresAuth: false },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: { requiresAuth: false },
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: WishListView,
    meta: { requiresAuth: true },
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
    meta: { requiresAuth: true },
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckOut,
    meta: { requiresAuth: true },
  },
  {
    path: "/account",
    name: "account",
    component: AccountView,
    meta: { requiresAuth: true },
  },
  {
    path: "/product/:id",
    name: "product-details",
    component: ProductDetailsView,
    meta: { requiresAuth: true },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  // 404 CATCH-ALL ROUTE
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

import store from "@/stores/counter";

export default router;

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "login" });
  } else if (to.meta.requiresGuest && isAuthenticated) {
    next({ name: "home" });
  } else {
    next();
  }
});
