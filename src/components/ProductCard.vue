<!-- <template>
  <div class="group relative min-w-[250px] max-w-[270px]">
    <div
      class="relative bg-[#F5F5F5] h-[250px] rounded flex items-center justify-center p-4 mb-4 overflow-hidden">
      <span
        v-if="discount"
        class="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-3 py-1 rounded">
        -{{ discount }}%
      </span>

      <div class="absolute top-3 right-3 flex flex-col gap-2">
        <button
          @click="addToWishlist"
          class="bg-white p-1.5 rounded-full hover:bg-gray-200 transition">
          ❤️
        </button>
        <button
          class="bg-white p-1.5 rounded-full hover:bg-gray-200 transition">
          👁️
        </button>
      </div>

      <img
        :src="product.image"
        :alt="product.title"
        class="max-h-[150px] object-contain mix-blend-multiply" />

      <button
        @click="addToCart"
        class="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        Add To Cart
      </button>
    </div>

    <h3 class="font-medium truncate block">{{ product.title }}</h3>
    <div class="flex gap-3 text-sm my-1">
      <span class="text-[#DB4444] font-medium">${{ product.price }}</span>
      <span class="text-gray-500 line-through"
        >${{ (product.price * 1.2).toFixed(2) }}</span
      >
    </div>

    <div class="flex items-center text-sm">
      <span class="text-[#FFAD33]">★★★★★</span>
      <span class="text-gray-500 ml-2"
        >({{ product.rating ? product.rating.count : 88 }})</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    addToCart() {
      this.$store.commit("ADD_TO_CART", this.product);
      alert(`${this.product.title} added to cart!`);
    },
    addToWishlist() {
      this.$store.commit("ADD_TO_WISHLIST", this.product);
      alert("Added to wishlist!");
    },
  },
};
</script> -->

<template>
  <div class="group relative min-w-[250px] max-w-[270px] w-full">
    <div
      class="relative bg-[#F5F5F5] h-[250px] rounded flex items-center justify-center p-4 mb-4 overflow-hidden">
      <span
        v-if="discount"
        class="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-3 py-1 rounded">
        -{{ discount }}%
      </span>
      <span
        v-else-if="isNew"
        class="absolute top-3 left-3 bg-[#00FF66] text-white text-xs px-3 py-1 rounded">
        NEW
      </span>

      <div v-if="isRemovable" class="absolute top-3 right-3">
        <button
          @click="$emit('remove')"
          class="bg-white p-1.5 rounded-full hover:bg-gray-200 transition text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      <div v-else class="absolute top-3 right-3 flex flex-col gap-2">
        <button
          @click="addToWishlist"
          class="bg-white p-1.5 rounded-full hover:bg-gray-200 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
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
        <button
          class="bg-white p-1.5 rounded-full hover:bg-gray-200 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
      </div>

      <img
        :src="product.image"
        :alt="product.title"
        class="max-h-[150px] object-contain mix-blend-multiply px-4"
        @click="goToDetail" />

      <button
        @click="addToCart"
        class="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        Add To Cart
      </button>
    </div>

    <h3 class="font-medium truncate block text-base">{{ product.title }}</h3>
    <div class="flex gap-3 text-sm my-1 items-center">
      <span class="text-[#DB4444] font-medium text-base"
        >${{ product.price }}</span
      >
      <span v-if="product.price" class="text-gray-500 line-through text-sm"
        >${{ (product.price * 1.2).toFixed(2) }}</span
      >
    </div>

    <div v-if="!isRemovable" class="flex items-center text-sm">
      <span class="text-[#FFAD33]">★★★★★</span>
      <span class="text-gray-500 ml-2"
        >({{ product.rating ? product.rating.count : 88 }})</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
    discount: Number,
    isNew: Boolean,
    isRemovable: Boolean, // If true, shows trash can instead of heart
  },
  methods: {
    addToCart() {
      this.$store.commit("ADD_TO_CART", this.product);
    },
    addToWishlist() {
      this.$store.commit("ADD_TO_WISHLIST", this.product);
      alert("Added to wishlist!");
    },
    goToDetail() {
      this.$router.push(`/product/${this.product.id}`);
    },
  },
};
</script>
