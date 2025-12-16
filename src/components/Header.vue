<template>
  <div class="relative z-50">
    <div class="bg-black text-white text-xs py-3 text-center">
      <div
        class="container mx-auto px-4 flex justify-between items-center sm:justify-center relative">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a href="#" class="font-bold underline ml-2">ShopNow</a>
        </p>
        <div class="hidden sm:block absolute right-4 cursor-pointer">
          English <span class="text-[10px] ml-1">▼</span>
        </div>
      </div>
    </div>

    <nav class="border-b border-gray-200 py-4 sticky top-0 bg-white z-40">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <h1
          class="text-2xl font-bold tracking-wider cursor-pointer"
          @click="$router.push('/home')">
          Exclusive
        </h1>

        <ul class="hidden md:flex space-x-8 text-sm font-medium">
          <li>
            <router-link to="/home" class="hover:underline hover:text-gray-500"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/contact"
              class="hover:underline hover:text-gray-500"
              >Contact</router-link
            >
          </li>
          <li>
            <router-link to="/about" class="hover:underline hover:text-gray-500"
              >About</router-link
            >
          </li>
          <li>
            <router-link
              to="/signup"
              class="hover:underline hover:text-gray-500"
              >Sign Up</router-link
            >
          </li>
        </ul>

        <div class="flex items-center space-x-4">
          <div class="relative hidden sm:block bg-gray-100 rounded">
            <input
              type="text"
              placeholder="What are you looking for?"
              class="bg-transparent text-xs py-2 px-4 pr-8 focus:outline-none w-52" />
            <span class="absolute right-2 top-2 text-gray-500 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>

          <div class="flex items-center gap-4">
            <button
              @click="$router.push('/wishlist')"
              class="hover:text-red-500 transition relative">
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

              <span
                v-if="wishlistCount > 0"
                class="absolute -top-1 -right-1 bg-[#DB4444] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {{ wishlistCount }}
              </span>
            </button>

            <button
              @click="$router.push('/cart')"
              class="hover:text-red-500 transition relative cursor-pointer">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span
                v-if="cartCount > 0"
                class="absolute -top-1 -right-1 bg-[#DB4444] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {{ cartCount }}
              </span>
            </button>

            <div class="relative">
              <button
                @click="toggleDropdown"
                :class="
                  dropdownOpen
                    ? 'bg-[#DB4444] text-white border-transparent'
                    : 'hover:bg-[#DB4444] hover:text-white border-transparent'
                "
                class="w-8 h-8 rounded-full flex items-center justify-center transition border border-gray-300 cursor-pointer">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              <div
                v-if="dropdownOpen"
                class="absolute right-0 top-full mt-3 w-56 bg-black/95 backdrop-blur-sm rounded shadow-xl text-white py-4 px-2 flex flex-col gap-3 z-50 animate-fade-in">
                <div
                  class="flex items-center gap-3 px-3 hover:text-gray-300 cursor-pointer transition">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <router-link to="/account"
                    ><span class="text-sm">Manage My Account</span></router-link
                  >
                </div>

                <div
                  class="flex items-center gap-3 px-3 hover:text-gray-300 cursor-pointer transition">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                  </svg>
                  <span class="text-sm">My Order</span>
                </div>

                <div
                  class="flex items-center gap-3 px-3 hover:text-gray-300 cursor-pointer transition">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm">My Cancellations</span>
                </div>

                <div
                  class="flex items-center gap-3 px-3 hover:text-gray-300 cursor-pointer transition">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                  </svg>
                  <span class="text-sm">My Reviews</span>
                </div>

                <div
                  @click="logout"
                  class="flex items-center gap-3 px-3 hover:text-gray-300 cursor-pointer transition pt-1 border-t border-gray-700 mt-1">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                  </svg>
                  <span class="text-sm">Logout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      dropdownOpen: false,
    };
  },
  computed: {
    cartCount() {
      return this.$store.getters.cartCount;
    },
    wishlistCount() {
      return this.$store.getters.wishlistCount;
    },
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    logout() {
      // Clear user from store
      this.$store.commit("SET_USER", null);
      this.dropdownOpen = false;
      alert("You have been logged out.");
      // Optional: Redirect to login
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
/* Simple fade animation for the dropdown */
.animate-fade-in {
  animation: fadeIn 0.2s ease-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
