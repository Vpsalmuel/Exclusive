<!-- <template>
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
                src="/src/assets/images/New-Icon-Linkedin.png"
                alt="LinkedIn"
                class="w-5 h-5"
            /></span>
            <span
              ><img
                src="/src/assets/images/New-Icon-Instagram.png"
                alt="Instagram"
                class="w-5 h-5"
            /></span>
            <span
              ><img
                src="/src/assets/images/New-Icon-Twitter.png"
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
                src="/src/assets/images/New-Icon-Linkedin.png"
                alt="LinkedIn"
                class="w-5 h-5"
            /></span>
            <span
              ><img
                src="/src/assets/images/New-Icon-Instagram.png"
                alt="Instagram"
                class="w-5 h-5"
            /></span>
            <span
              ><img
                src="/src/assets/images/New-Icon-Twitter.png"
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
                src="/src/assets/images/New-Icon-Linkedin.png"
                alt="LinkedIn"
                class="w-5 h-5"
            /></span>
            <span
              ><img
                src="/src/assets/images/New-Icon-Instagram.png"
                alt="Instagram"
                class="w-5 h-5"
            /></span>
            <span
              ><img
                src="/src/assets/images/New-Icon-Twitter.png"
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
</script> -->
<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <div class="container mx-auto px-4 py-10 mb-20">
      <!-- Breadcrumb -->
      <div class="text-sm mb-10 text-gray-500">
        <router-link to="/home" class="hover:text-black">Home</router-link>
        <span class="mx-2">/</span>
        <span class="text-black font-medium">About</span>
      </div>

      <!-- Our Story -->
      <div class="flex flex-col md:flex-row items-center gap-16 mb-32">
        <div class="w-full md:w-1/2">
          <h1 class="text-5xl font-bold mb-10 tracking-wide">Our Story</h1>
          <p class="text-gray-700 leading-relaxed mb-6 max-w-[525px]">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh.
          </p>
          <p class="text-gray-700 leading-relaxed max-w-[525px]">
            Exclusive offers a diverse assortment across multiple categories and
            continues to grow rapidly.
          </p>
        </div>

        <div class="w-full md:w-1/2">
          <img
            :src="aboutImage"
            alt="Shopping Women"
            class="rounded w-full h-[609px] object-cover shadow-lg" />
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-32">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="border border-gray-300 rounded-md p-8 flex flex-col items-center text-center group hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white transition">
          <div
            class="bg-black/30 group-hover:bg-white/30 rounded-full p-3 mb-4">
            <div
              class="bg-black group-hover:bg-white w-10 h-10 rounded-full flex items-center justify-center">
              <img
                :src="stat.icon"
                class="w-5 h-5 object-contain group-hover:invert"
                alt="" />
            </div>
          </div>
          <h3 class="text-3xl font-bold mb-1">{{ stat.value }}</h3>
          <p class="text-sm">{{ stat.label }}</p>
        </div>
      </div>

      <!-- Team -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
        <div
          v-for="member in team"
          :key="member.name"
          class="bg-white rounded overflow-hidden">
          <div
            class="bg-[#F5F5F5] h-[400px] flex items-end justify-center pt-8 mb-6 rounded">
            <img
              :src="member.image"
              class="h-[392px] object-contain"
              :alt="member.name" />
          </div>
          <h3 class="text-3xl font-medium mb-1">{{ member.name }}</h3>
          <p class="text-gray-500 mb-3">{{ member.role }}</p>
          <div class="flex gap-4">
            <img
              v-for="icon in socialIcons"
              :key="icon"
              :src="icon"
              class="w-5 h-5 object-contain cursor-pointer"
              alt="social" />
          </div>
        </div>
      </div>

      <!-- Services -->
      <section
        class="flex flex-col md:flex-row justify-center gap-20 text-center">
        <div v-for="service in services" :key="service.title">
          <div
            class="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <img :src="service.icon" class="w-6 h-6 object-contain" alt="" />
          </div>
          <h3 class="font-bold uppercase text-sm mb-1">
            {{ service.title }}
          </h3>
          <p class="text-xs text-gray-600">
            {{ service.text }}
          </p>
        </div>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import aboutImage from "@/assets/images/two-females.jpg";
import storeIcon from "@/assets/images/store.png";
import moneyIcon from "@/assets/images/money-back1.png";
import giftIcon from "@/assets/images/giftbag.png";
import coinIcon from "@/assets/images/coins.png";

import man1 from "@/assets/images/man1.png";
import woman2 from "@/assets/images/woman2.png";
import man2 from "@/assets/images/man2.png";

import linkedin from "@/assets/images/New-Icon-Linkedin.png";
import instagram from "@/assets/images/New-Icon-Instagram.png";
import twitter from "@/assets/images/New-Icon-Twitter.png";

import delivery from "@/assets/images/Services.png";
import support from "@/assets/images/customer-care.png";
import refund from "@/assets/images/moneyback.png";

export default {
  name: "AboutView",
  components: { Header, Footer },
  data() {
    return {
      aboutImage,
      socialIcons: [linkedin, instagram, twitter],
      stats: [
        { value: "10.5k", label: "Sellers active on site", icon: storeIcon },
        { value: "33k", label: "Monthly Product Sale", icon: moneyIcon },
        { value: "45.5k", label: "Customers active", icon: giftIcon },
        { value: "25k", label: "Annual gross sale", icon: coinIcon },
      ],
      team: [
        { name: "Tom Cruise", role: "Founder & Chairman", image: man1 },
        { name: "Emma Watson", role: "Managing Director", image: woman2 },
        { name: "Will Smith", role: "Product Designer", image: man2 },
      ],
      services: [
        {
          title: "Free and Fast Delivery",
          text: "Free delivery for all orders over $140",
          icon: delivery,
        },
        {
          title: "24/7 Customer Service",
          text: "Friendly 24/7 customer support",
          icon: support,
        },
        {
          title: "Money Back Guarantee",
          text: "We return money within 30 days",
          icon: refund,
        },
      ],
    };
  },
};
</script>
