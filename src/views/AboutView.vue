<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <div class="container mx-auto px-4 py-10 mb-20">
      <div class="text-sm mb-10 text-gray-500">
        <router-link to="/" class="hover:text-black">Home</router-link>
        <span class="mx-2">/</span>
        <span class="text-black font-medium">About</span>
      </div>

      <div class="flex flex-col md:flex-row items-center gap-16 mb-32">
        <div class="w-full md:w-1/2">
          <h1 class="text-5xl font-bold mb-10 tracking-wide">Our Story</h1>
          <p class="text-gray-700 leading-relaxed mb-6 max-w-[525px]">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sellers and 300 brands and serves 3 millions customers
            across the region.
          </p>
          <p class="text-gray-700 leading-relaxed max-w-[525px]">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </div>
        <div class="w-full md:w-1/2">
          <img
            src="/src/assets/images/two-females.jpg"
            alt="Shopping Women"
            class="rounded w-full object-cover shadow-lg h-[609px]" />
        </div>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-32 h-[230px]">
        <div
          class="border border-gray-300 rounded-md p-8 flex flex-col items-center text-center group hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white transition cursor-pointer">
          <div
            class="bg-black/30 group-hover:bg-white/30 rounded-full p-3 mb-4">
            <div
              class="bg-black text-white group-hover:bg-white group-hover:text-black w-10 h-10 rounded-full flex items-center justify-center text-xl">
              <img src="/src/assets/images/store.png" alt="" />
            </div>
          </div>
          <h3 class="text-3xl font-bold mb-1">10.5k</h3>
          <p class="text-sm">Sellers active our site</p>
        </div>

        <div
          class="border border-gray-300 rounded p-8 flex flex-col items-center text-center group hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white transition cursor-pointer">
          <div
            class="bg-black/30 group-hover:bg-white/30 rounded-full p-3 mb-4">
            <div
              class="bg-black text-white group-hover:bg-white group-hover:text-black w-10 h-10 rounded-full flex items-center justify-center text-xl">
              <img src="/src/assets/images/money-back1.png" alt="" />
            </div>
          </div>
          <h3 class="text-3xl font-bold mb-1">33k</h3>
          <p class="text-sm">Monthly Product Sale</p>
        </div>

        <div
          class="border border-gray-300 rounded p-8 flex flex-col items-center text-center group hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white transition cursor-pointer">
          <div
            class="bg-black/30 group-hover:bg-white/30 rounded-full p-3 mb-4">
            <div
              class="bg-black text-white group-hover:bg-white group-hover:text-black w-10 h-10 rounded-full flex items-center justify-center text-xl">
              <img src="/src/assets/images/giftbag.png" alt="" />
            </div>
          </div>
          <h3 class="text-3xl font-bold mb-1">45.5k</h3>
          <p class="text-sm">Customer active in our site</p>
        </div>

        <div
          class="border border-gray-300 rounded p-8 flex flex-col items-center text-center group hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white transition cursor-pointer">
          <div
            class="bg-black/30 group-hover:bg-white/30 rounded-full p-3 mb-4">
            <div
              class="bg-black text-white group-hover:bg-white group-hover:text-black w-10 h-10 rounded-full flex items-center justify-center text-xl">
              <img src="/src/assets/images/coins.png" alt="" />
            </div>
          </div>
          <h3 class="text-3xl font-bold mb-1">25k</h3>
          <p class="text-sm">Annual gross sale in our site</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
        <div class="bg-white rounded overflow-hidden">
          <div
            class="bg-[#F5F5F5] h-[400px] flex items-end justify-center pt-8 mb-6 rounded">
            <img
              src="/src/assets/images/man1.png"
              class="h-[392px] object-cover"
              alt="Tom Cruise" />
          </div>
          <h3 class="text-3xl font-medium mb-1">Tom Cruise</h3>
          <p class="text-gray-500 mb-3">Founder & Chairman</p>
          <div class="flex gap-4 text-xl">
            <span
              ><img
                src="/src/assets/images/Linkedin.png"
                alt="LinkedIn"
                class="w-5 h-5"
            /></span>
            <span
              ><img
                src="/src/assets/images/icon-instagram-dark.png"
                alt="Instagram"
                class="w-5 h-5"
            /></span>
            <span
              ><img
                src="/src/assets/images/icon-twitter-dark.png"
                alt="Twitter"
                class="w-5 h-5"
            /></span>
          </div>
        </div>

        <div class="bg-white rounded overflow-hidden">
          <div
            class="bg-[#F5F5F5] h-[400px] flex items-end justify-center pt-8 mb-6 rounded">
            <img
              src="/src/assets/images/woman2.png"
              class="h-[392px] object-cover"
              alt="Emma Watson" />
          </div>
          <h3 class="text-3xl font-medium mb-1">Emma Watson</h3>
          <p class="text-gray-500 mb-3">Managing Director</p>
          <div class="flex gap-4 text-xl">
            <span
              ><img
                src="/src/assets/images/Linkedin.png"
                alt="LinkedIn"
                class="w-5 h-5"
            /></span>
            <span
              ><img
                src="/src/assets/images/icon-instagram-dark.png"
                alt="Instagram"
                class="w-5 h-5"
            /></span>
            <span
              ><img
                src="/src/assets/images/icon-twitter-dark.png"
                alt="Twitter"
                class="w-5 h-5"
            /></span>
          </div>
        </div>

        <div class="bg-white rounded overflow-hidden">
          <div
            class="bg-[#F5F5F5] h-[400px] flex items-end justify-center pt-8 mb-6 rounded">
            <img
              src="/src/assets/images/man2.png"
              class="h-[392px] object-cover"
              alt="Will Smith" />
          </div>
          <h3 class="text-3xl font-medium mb-1">Will Smith</h3>
          <p class="text-gray-500 mb-3">Product Designer</p>
          <div class="flex gap-4 text-xl">
            <span
              ><img
                src="/src/assets/images/Linkedin.png"
                alt="LinkedIn"
                class="w-5 h-5"
            /></span>
            <span
              ><img
                src="/src/assets/images/icon-instagram-dark.png"
                alt="Instagram"
                class="w-5 h-5"
            /></span>
            <span
              ><img
                src="/src/assets/images/icon-twitter-dark.png"
                alt="Twitter"
                class="w-5 h-5"
            /></span>
          </div>
        </div>
      </div>

      <section
        class="container mx-auto px-4 mb-20 flex flex-col md:flex-row justify-center gap-20 text-center">
        <div>
          <div
            class="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-8px border-gray-200">
            <img src="/src/assets/images/Services.png" alt="" />
          </div>
          <h3 class="font-bold uppercase text-sm mb-1">
            Free and Fast Delivery
          </h3>
          <p class="text-xs text-gray-600">
            Free delivery for all orders over $140
          </p>
        </div>
        <div>
          <div
            class="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-8px border-gray-200">
            <img
              src="/src/assets/images/customer-care.png"
              alt="customer-care" />
          </div>
          <h3 class="font-bold uppercase text-sm mb-1">
            24/7 Customer Service
          </h3>
          <p class="text-xs text-gray-600">Friendly 24/7 customer support</p>
        </div>
        <div>
          <div
            class="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-8px border-gray-200">
            <img src="/src/assets/images/moneyback.png" alt="money-back" />
          </div>
          <h3 class="font-bold uppercase text-sm mb-1">Money Back Guarantee</h3>
          <p class="text-xs text-gray-600">We return money within 30 days</p>
        </div>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "AboutView",
  components: {
    Header,
    Footer,
  },
};
</script>
