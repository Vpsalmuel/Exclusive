<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />

    <div class="container mx-auto px-4 py-10 mb-20">
      <div class="flex justify-between items-center mb-10">
        <h2 class="text-xl font-medium">Wishlist ({{ wishlist.length }})</h2>
        <button
          @click="moveAllToBag"
          class="border border-gray-400 px-8 py-3 rounded hover:bg-gray-100 transition font-medium">
          Move All To Bag
        </button>
      </div>

      <div
        v-if="wishlist.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        <ProductCard
          v-for="item in wishlist"
          :key="item.id"
          :product="item"
          :discount="35"
          :isRemovable="true"
          @remove="removeFromWishlist(item.id)" />
      </div>
      <div
        v-else
        class="text-center py-20 text-gray-500 bg-gray-50 mb-20 rounded">
        <p class="text-lg mb-4">Your wishlist is empty.</p>
        <router-link to="/home" class="text-[#DB4444] underline"
          >Browse Products</router-link
        >
      </div>

      <div class="flex justify-between items-center mb-10">
        <div class="flex items-center gap-4">
          <div class="w-4 h-8 bg-[#DB4444] rounded"></div>
          <h2 class="text-xl font-medium">Just For You</h2>
        </div>
        <button
          class="border border-gray-400 px-8 py-3 rounded hover:bg-gray-100 transition font-medium">
          See All
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <ProductCard
          v-for="item in products.slice(0, 4)"
          :key="item.id"
          :product="item"
          :discount="0"
          :isNew="true" />
      </div>
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
  name: "WishlistView",
  components: {
    Header,
    Footer,
    ProductCard,
  },
  computed: {
    ...mapState(["wishlist", "products"]),
  },
  methods: {
    removeFromWishlist(id) {
      this.$store.commit("REMOVE_FROM_WISHLIST", id);
    },
    moveAllToBag() {
      if (this.wishlist.length === 0) {
        alert("Wishlist is empty!");
        return;
      }
      this.$store.dispatch("moveAllToBag");
      alert("All items moved to cart!");
    },
  },
};
</script>
