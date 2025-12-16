import { createRouter, createWebHistory } from "vue-router";

import LoginView from "@/views/LoginView.vue";
import SignupView from "@/views/SignupView.vue";
import HomeView from "@/views/HomeView.vue";
import WishListView from "@/views/WishListView.vue";
import CartView from "@/views/CartView.vue";
import CheckOut from "@/views/CheckOut.vue";
import AccountView from "@/views/AccountView.vue";
import ProductDetailsView from "@/views/ProductDetailsView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

import store from "@/stores/counter";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: { requiresAuth: false },
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
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
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters?.isAuthenticated;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
