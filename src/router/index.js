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
    name: "signup",
    redirect: "/signup",
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: WishListView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckOut,
  },
  {
    path: "/account",
    name: "account",
    component: AccountView,
  },
  {
    path: "/product/:id",
    name: "product-details",
    component: ProductDetailsView,
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

export default router;
