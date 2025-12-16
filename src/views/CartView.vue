<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <div class="container mx-auto px-4 py-10 mb-20">
      <div class="text-sm mb-10 text-gray-500">
        <router-link to="/home" class="hover:text-black">Home</router-link>
        <span class="mx-2">/</span>
        <span class="text-black">Cart</span>
      </div>

      <div class="mb-10">
        <div
          class="grid grid-cols-4 bg-white shadow-sm rounded h-16 items-center px-4 mb-6 text-sm font-medium text-gray-600">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>

        <div v-if="cart.length > 0">
          <div
            v-for="item in cart"
            :key="item.id"
            class="grid grid-cols-4 bg-white shadow-sm rounded h-24 items-center px-4 mb-6 text-sm relative group">
            <div class="flex items-center gap-4 relative">
              <button
                @click="removeFromCart(item.id)"
                class="absolute -top-2 -left-2 bg-[#DB4444] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition shadow-md">
                ✕
              </button>

              <img
                :src="item.image"
                :alt="item.title"
                class="w-12 h-12 object-contain mix-blend-multiply" />
              <span class="truncate pr-4">{{ item.title }}</span>
            </div>

            <div>${{ item.price }}</div>

            <div>
              <input
                type="number"
                min="1"
                :value="item.qty"
                @input="updateQuantity(item.id, $event.target.value)"
                class="w-16 border border-gray-300 rounded px-2 py-1 text-center focus:outline-none focus:border-[#DB4444]" />
            </div>

            <div>${{ (item.price * item.qty).toFixed(2) }}</div>
          </div>

          <div class="flex justify-between mt-8">
            <router-link
              to="/home"
              class="border border-gray-400 px-8 py-3 rounded hover:bg-gray-100 transition font-medium">
              Return To Shop
            </router-link>
            <button
              class="border border-gray-400 px-8 py-3 rounded hover:bg-gray-100 transition font-medium">
              Update Cart
            </button>
          </div>
        </div>

        <div
          v-else
          class="text-center py-20 bg-gray-50 rounded text-gray-500 border border-gray-100">
          <p class="text-lg mb-4">Your cart is empty.</p>
          <router-link
            to="/home"
            class="bg-[#DB4444] text-white px-8 py-3 rounded hover:bg-red-600 transition">
            Go Shopping
          </router-link>
        </div>
      </div>

      <div
        v-if="cart.length > 0"
        class="flex flex-col md:flex-row justify-between gap-10 items-start">
        <div class="flex gap-4 w-full md:w-1/2">
          <input
            type="text"
            placeholder="Coupon Code"
            class="border border-gray-400 rounded px-4 py-3 w-60 focus:outline-none focus:border-black" />
          <button
            class="bg-[#DB4444] text-white px-8 py-3 rounded hover:bg-red-600 transition">
            Apply Coupon
          </button>
        </div>

        <div class="border border-gray-600 rounded p-6 w-full md:w-1/3">
          <h3 class="font-medium text-lg mb-6">Cart Total</h3>

          <div
            class="flex justify-between py-3 border-b border-gray-300 text-sm">
            <span>Subtotal:</span>
            <span>${{ cartTotal.toFixed(2) }}</span>
          </div>
          <div
            class="flex justify-between py-3 border-b border-gray-300 text-sm">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div class="flex justify-between py-3 text-sm font-medium">
            <span>Total:</span>
            <span>${{ cartTotal.toFixed(2) }}</span>
          </div>

          <div class="mt-6 text-center">
            <button
              @click="$router.push('/checkout')"
              class="bg-[#DB4444] text-white py-3 px-8 rounded hover:bg-red-600 transition text-sm">
              Procees to checkout
            </button>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "CartView",
  components: { Header, Footer },
  computed: { ...mapState(["cart"]), ...mapGetters(["cartTotal"]) },
  methods: {
    removeFromCart(id) {
      this.$store.commit("REMOVE_FROM_CART", id);
    },
    updateQuantity(id, qty) {
      this.$store.commit("UPDATE_QUANTITY", { productId: id, quantity: qty });
    },
  },
};
</script>
