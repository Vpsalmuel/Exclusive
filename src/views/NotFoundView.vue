<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />

    <div
      class="container mx-auto px-4 py-10 mb-20 flex flex-col items-center justify-center text-center grow">
      <div class="w-full text-left text-sm mb-20 text-gray-500">
        <router-link to="/" class="hover:text-black">Home</router-link>
        <span class="mx-2">/</span>
        <span class="text-black font-medium">404 Error</span>
      </div>

      <h1
        class="text-[80px] md:text-[110px] font-medium leading-none mb-10 tracking-widest">
        404 Not Found
      </h1>

      <p class="text-gray-800 mb-20">
        Your visited page not found. You may go home page.
      </p>

      <router-link
        to="/"
        class="bg-[#DB4444] text-white py-4 px-12 rounded hover:bg-red-600 transition font-medium">
        Back to home page
      </router-link>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "NotFoundView",
  components: {
    Header,
    Footer,
  },
};
</script>
