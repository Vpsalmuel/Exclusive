<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <div v-if="product" class="container mx-auto px-4 py-10 mb-20">
      <div class="text-sm mb-10 text-gray-500">
        <router-link to="/" class="hover:text-black">Account</router-link>
        <span class="mx-2">/</span>
        <span class="hover:text-black cursor-pointer">{{
          product.category
        }}</span>
        <span class="mx-2">/</span>
        <span class="text-black font-medium truncate">{{ product.title }}</span>
      </div>

      <div class="flex flex-col md:flex-row gap-10 mb-20">
        <div class="w-full md:w-3/5 flex gap-6">
          <div class="flex flex-col gap-4 w-[170px]">
            <div
              v-for="i in 4"
              :key="i"
              class="bg-[#F5F5F5] rounded p-4 cursor-pointer hover:border hover:border-black transition h-[138px] flex items-center justify-center"
              @click="activeImage = product.image">
              <img
                :src="product.image"
                class="max-h-full object-contain mix-blend-multiply" />
            </div>
          </div>

          <div
            class="flex-1 bg-[#F5F5F5] rounded h-[600px] flex items-center justify-center p-8">
            <img
              :src="activeImage || product.image"
              :alt="product.title"
              class="max-h-full max-w-full object-contain mix-blend-multiply" />
          </div>
        </div>

        <div class="w-full md:w-2/5">
          <h1 class="text-2xl font-bold mb-4">{{ product.title }}</h1>

          <div class="flex items-center gap-4 text-sm mb-4">
            <div class="text-[#FFAD33]">
              ★★★★☆
              <span class="text-gray-500 ml-1"
                >({{
                  product.rating ? product.rating.count : 150
                }}
                Reviews)</span
              >
            </div>
            <span class="text-gray-300">|</span>
            <span class="text-[#00FF66]">In Stock</span>
          </div>

          <div class="text-2xl font-medium mb-6">${{ product.price }}</div>

          <p class="text-sm text-gray-600 mb-6 border-b border-gray-300 pb-6">
            {{ product.description }}
          </p>

          <div class="flex items-center gap-4 mb-6">
            <span class="text-xl mr-2">Colours:</span>
            <div class="flex gap-2">
              <button
                class="w-5 h-5 rounded-full bg-[#A0BCE0] border-2 border-transparent hover:border-black focus:border-black ring-1 ring-offset-1 ring-transparent"></button>
              <button
                class="w-5 h-5 rounded-full bg-[#E07575] border-2 border-transparent hover:border-black focus:border-black ring-1 ring-offset-1 ring-transparent"></button>
            </div>
          </div>

          <div class="flex items-center gap-4 mb-8">
            <span class="text-xl mr-2">Size:</span>
            <div class="flex gap-4">
              <button
                v-for="size in ['XS', 'S', 'M', 'L', 'XL']"
                :key="size"
                class="w-8 h-8 rounded border border-gray-300 text-xs font-medium hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] transition flex items-center justify-center"
                :class="{
                  'bg-[#DB4444] text-white border-[#DB4444]':
                    selectedSize === size,
                }"
                @click="selectedSize = size">
                {{ size }}
              </button>
            </div>
          </div>

          <div class="flex items-center gap-4 mb-10">
            <div class="flex border border-gray-400 rounded w-fit">
              <button
                @click="quantity > 1 ? quantity-- : null"
                class="px-4 py-2 hover:bg-[#DB4444] hover:text-white transition border-r border-gray-400">
                -
              </button>
              <div class="px-6 py-2 font-medium w-12 text-center">
                {{ quantity }}
              </div>
              <button
                @click="quantity++"
                class="px-4 py-2 hover:bg-[#DB4444] hover:text-white transition border-l border-gray-400 bg-[#DB4444] text-white">
                +
              </button>
            </div>

            <button
              @click="addToCart"
              class="bg-[#DB4444] text-white px-10 py-2.5 rounded hover:bg-red-600 transition font-medium">
              Buy Now
            </button>

            <button
              @click="addToWishlist"
              class="border border-gray-400 p-2 rounded hover:bg-gray-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          <div class="border border-gray-400 rounded">
            <div class="flex items-center gap-4 p-4 border-b border-gray-400">
              <div class="w-10 h-10 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-full h-full text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-medium text-sm">Free Delivery</h4>
                <p class="text-xs text-gray-500 underline">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            <div class="flex items-center gap-4 p-4">
              <div class="w-10 h-10 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-full h-full text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <h4 class="font-medium text-sm">Return Delivery</h4>
                <p class="text-xs text-gray-500">
                  Free 30 Days Delivery Returns.
                  <span class="underline">Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-20">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-4 h-8 bg-[#DB4444] rounded"></div>
          <span class="text-[#DB4444] font-bold">Related Item</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <ProductCard
            v-for="item in relatedProducts"
            :key="item.id"
            :product="item"
            :discount="item.id % 2 === 0 ? 30 : 0" />
        </div>
      </div>
    </div>

    <div v-else class="h-screen flex items-center justify-center">
      <p>Loading Product...</p>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductCard from "@/components/ProductCard.vue";
import { mapState } from "vuex";

export default {
  name: "ProductDetailView",
  components: {
    Header,
    Footer,
    ProductCard,
  },
  data() {
    return {
      product: null,
      activeImage: null,
      quantity: 1,
      selectedSize: "M",
    };
  },
  computed: {
    ...mapState(["products"]),
    relatedProducts() {
      // Return 4 random products for the "Related" section
      return this.products.slice(0, 4);
    },
  },
  async created() {
    // 1. Get the ID from the URL (e.g., /product/123)
    const productId = this.$route.params.id;

    // 2. Fetch data
    this.product = await this.$store.dispatch("fetchProductById", productId);
  },
  methods: {
    addToCart() {
      // Add the item with the specific quantity selected
      const itemToAdd = { ...this.product, qty: this.quantity };

      // We manually commit mutiple times or update the logic,
      // but for simplicity, we will just loop add it
      this.$store.commit("ADD_TO_CART", itemToAdd);

      // Since our simple store logic only adds 1 or increments,
      // we can do a quick hack for this specific page if we want exact qty:
      this.$store.commit("UPDATE_QUANTITY", {
        productId: this.product.id,
        quantity: this.quantity,
      });

      alert("Added to cart!");
    },
    addToWishlist() {
      this.$store.commit("ADD_TO_WISHLIST", this.product);
      alert("Added to wishlist!");
    },
  },
  // If the route changes (e.g. clicking a related item), fetch new data
  watch: {
    "$route.params.id": async function (newId) {
      this.product = null;
      this.product = await this.$store.dispatch("fetchProductById", newId);
      window.scrollTo(0, 0);
    },
  },
};
</script>
