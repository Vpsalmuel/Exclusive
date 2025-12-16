import { createStore } from "vuex";

export default createStore({
  // 1. STATE
  state() {
    return {
      products: [],
      cart: [],
      wishlist: [],
      user: null,
      loading: false,
    };
  },

  // 2. GETTERS
  getters: {
    cartCount(state) {
      return state.cart.reduce((sum, item) => sum + item.qty, 0);
    },
    cartTotal(state) {
      return state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    },

    wishlistCount(state) {
      return state.wishlist.length;
    },
    cartTotal: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.price * item.qty;
      });
      return total;
    },

    isAuthenticated(state) {
      return !!state.user;
    },
  },

  // 3. MUTATIONS
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_LOADING(state, status) {
      state.loading = status;
    },
    ADD_TO_CART(state, product) {
      const item = state.cart.find((i) => i.id === product.id);
      if (item) {
        item.qty += product.qty || 1;
      } else {
        state.cart.push({ ...product, qty: product.qty || 1 });
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter((i) => i.id !== productId);
    },
    UPDATE_QUANTITY(state, { productId, quantity }) {
      const item = state.cart.find((i) => i.id === productId);
      if (item) {
        item.qty = Math.max(1, Number(quantity));
      }
    },
    CLEAR_CART(state) {
      state.cart = [];
    },
    ADD_TO_WISHLIST(state, product) {
      if (!state.wishlist.find((i) => i.id === product.id)) {
        state.wishlist.push(product);
      }
    },
    REMOVE_FROM_WISHLIST(state, productId) {
      state.wishlist = state.wishlist.filter((i) => i.id !== productId);
    },
    CLEAR_WISHLIST(state) {
      state.wishlist = [];
    },
  },

  // 4. ACTIONS
  actions: {
    async fetchProducts({ commit }) {
      commit("SET_LOADING", true);
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        commit("SET_PRODUCTS", data);
      } catch (err) {
        console.error("Fetch products failed:", err);
      }
      commit("SET_LOADING", false);
    },

    async fetchProductById(_, id) {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        return await res.json();
      } catch {
        return null;
      }
    },

    async loginUser({ commit }, credentials) {
      if (!credentials.email || !credentials.password) {
        throw new Error("Invalid credentials");
      }
      commit("SET_USER", {
        name: "Md Rimel",
        email: credentials.email,
        token: "dummy-token-123",
      });
    },

    logout({ commit }) {
      commit("SET_USER", null);
    },
  },
});
