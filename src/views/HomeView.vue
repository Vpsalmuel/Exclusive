<template>
  <div class="min-h-screen flex flex-col gap-20">
    <Header />

    <section class="container mx-auto px-4 mt-8 mb-14">
      <div class="flex flex-col md:flex-row gap-10">
        <ul
          class="w-full md:w-1/5 space-y-3 text-sm border-r border-gray-200 pr-4 hidden md:block">
          <li class="flex justify-between cursor-pointer">
            Woman's Fashion <span>›</span>
          </li>
          <li class="flex justify-between cursor-pointer">
            Men's Fashion <span>›</span>
          </li>
          <li class="cursor-pointer">Electronics</li>
          <li class="cursor-pointer">Home & Lifestyle</li>
          <li class="cursor-pointer">Medicine</li>
          <li class="cursor-pointer">Sports & Outdoor</li>
          <li class="cursor-pointer">Baby's & Toys</li>
          <li class="cursor-pointer">Groceries & Pets</li>
          <li class="cursor-pointer">Health & Beauty</li>
        </ul>

        <div
          class="flex-1 bg-black text-white p-10 md:p-16 relative overflow-hidden flex items-center">
          <div class="z-10 max-w-sm">
            <div class="flex items-center gap-4 mb-4">
              <img
                src="/src/assets/images/apple-logo.png"
                alt="apple-logo"
                class="w-10 h-10" />
              <span class="text-sm">iPhone 14 Series</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Up to 10% <br />
              off Voucher
            </h2>
            <button
              class="flex items-center gap-2 border-b border-white pb-1 w-fit">
              Shop Now <span>→</span>
            </button>
          </div>
          <img
            src="/src/assets/images/hero-new-2.png"
            class="absolute right-0 top-10 md:top-4 h-[400px] object-contain"
            alt="Hero Phone" />
          <!-- <div class="rounded-full bg-white opacity-50 z-99 blur-3xl">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div> -->
        </div>
      </div>
    </section>

    <section class="container mx-auto px-4 mb-20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-4 h-8 bg-[#DB4444] rounded"></div>
        <span class="text-[#DB4444] font-bold">Today's</span>
      </div>

      <div
        class="flex flex-col md:flex-row md:items-end justify-evenly mb-8 gap-16">
        <h2 class="text-3xl font-bold tracking-wide">Flash Sales</h2>
        <div class="flex items-center gap-4 text-center">
          <div>
            <div class="text-xs font-medium">Days</div>
            <div class="text-3xl font-bold">03</div>
          </div>
          <span class="text-[#DB4444] text-2xl">:</span>
          <div>
            <div class="text-xs font-medium">Hours</div>
            <div class="text-3xl font-bold">23</div>
          </div>
          <span class="text-[#DB4444] text-2xl">:</span>
          <div>
            <div class="text-xs font-medium">Minutes</div>
            <div class="text-3xl font-bold">19</div>
          </div>
          <span class="text-[#DB4444] text-2xl">:</span>
          <div>
            <div class="text-xs font-medium">Seconds</div>
            <div class="text-3xl font-bold">56</div>
          </div>
        </div>
        <div class="hidden md:flex gap-2 ml-auto">
          <button class="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <img src="/src/assets/images/icons_arrow-left.png" alt="" />
          </button>
          <button class="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <img src="/src/assets/images/icons arrow-right.png" alt="" />
          </button>
        </div>
      </div>

      <div class="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        <ProductCard
          v-for="product in products.slice(0, 5)"
          :key="product.id"
          :product="product"
          :discount="40" />
      </div>
      <div class="text-center mt-8">
        <button
          class="bg-[#DB4444] text-white py-3 px-10 rounded hover:bg-red-600 transition">
          View All Products
        </button>
      </div>
    </section>

    <section
      class="container mx-auto px-4 mb-20 border-t border-gray-200 pt-16">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-4 h-8 bg-[#DB4444] rounded-md"></div>
        <span class="text-[#DB4444] font-bold">Categories</span>
      </div>
      <h2 class="text-3xl font-bold mb-10">Browse By Category</h2>

      <div class="grid grid-cols-2 md:grid-cols-6 gap-6">
        <div
          v-for="icon in categories"
          :key="icon.name"
          class="border border-gray-300 rounded hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] transition cursor-pointer flex flex-col items-center justify-center h-36 gap-4 group">
          <img
            :src="icon.emoji"
            :alt="icon.name"
            class="w-12 h-12 object-contain" />
          <span class="text-sm">{{ icon.name }}</span>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-4 mb-20">
      <div class="flex items-center justify-between mb-8">
        <div>
          <div class="flex items-center gap-4 mb-4">
            <div class="w-4 h-8 bg-[#DB4444] rounded"></div>
            <span class="text-[#DB4444] font-bold">This Month</span>
          </div>
          <h2 class="text-3xl font-bold">Best Selling Products</h2>
        </div>
        <button class="bg-[#DB4444] text-white py-2 px-8 rounded h-fit">
          View All
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
        <ProductCard
          v-for="product in products.slice(4, 8)"
          :key="product.id"
          :product="product" />
      </div>
    </section>

    <section class="container mx-auto px-4 mb-20">
      <div
        class="bg-black text-white p-10 md:p-16 rounded flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <div class="z-10">
          <span class="text-[#00FF66] font-bold">Categories</span>
          <h2 class="text-4xl md:text-5xl font-bold leading-tight mt-4 mb-8">
            Enhance Your <br />
            Music Experience
          </h2>

          <div class="flex gap-4 mb-8">
            <div
              class="bg-white text-black w-16 h-16 rounded-full flex flex-col items-center justify-center font-bold text-xs leading-none">
              <span>23</span> Hours
            </div>
            <div
              class="bg-white text-black w-16 h-16 rounded-full flex flex-col items-center justify-center font-bold text-xs leading-none">
              <span>05</span> Days
            </div>
            <div
              class="bg-white text-black w-16 h-16 rounded-full flex flex-col items-center justify-center font-bold text-xs leading-none">
              <span>59</span> Mins
            </div>
            <div
              class="bg-white text-black w-16 h-16 rounded-full flex flex-col items-center justify-center font-bold text-xs leading-none">
              <span>35</span> Secs
            </div>
          </div>
          <button
            class="bg-[#00FF66] text-black px-8 py-3 rounded font-bold hover:opacity-90">
            Buy Now!
          </button>
        </div>

        <div
          class="w-full md:w-1/2 h-[300px] flex items-center justify-center mt-10 md:mt-0 relative">
          <div
            class="absolute inset-0 bg-white/20 blur-[100px] rounded-full"></div>
          <img
            src="/src/assets/images/boombox.png"
            class="h-[700px] object-contain relative z-10 drop-shadow-2xl brightness-100 transform scale-x-[-1]"
            alt="Speaker" />
        </div>
      </div>
    </section>

    <section class="container mx-auto px-4 mb-20">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-4 h-8 bg-[#DB4444] rounded"></div>
        <span class="text-[#DB4444] font-bold">Our Products</span>
      </div>

      <div class="flex items-center justify-between mb-8">
        <h2 class="text-3xl font-bold tracking-wide">Explore Our Products</h2>
        <div class="flex gap-2">
          <button class="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <img src="/src/assets/images/icons_arrow-left.png" alt="" />
          </button>
          <button class="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <img src="/src/assets/images/icons_arrow-left.png" alt="" />
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <ProductCard
          v-for="product in products.slice(8, 16)"
          :key="product.id"
          :product="product"
          :isNew="product.id % 2 === 0" />
      </div>

      <div class="text-center mt-12">
        <button
          class="bg-[#DB4444] text-white py-3 px-10 rounded hover:bg-red-600 transition">
          View All Products
        </button>
      </div>
    </section>

    <section class="container mx-auto px-4 mb-24">
      <div class="flex items-center gap-4 mb-4">
        <div class="w-4 h-8 bg-[#DB4444] rounded"></div>
        <span class="text-[#DB4444] font-bold">Featured</span>
      </div>
      <h2 class="text-3xl font-bold mb-10">New Arrival</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px]">
        <div class="bg-black relative rounded text-white p-8 flex items-end">
          <div class="z-10">
            <h3 class="text-2xl font-bold mb-2">PlayStation 5</h3>
            <p class="text-sm text-gray-300 mb-4 w-2/3">
              Black and White version of the PS5 coming out on sale.
            </p>
            <a href="#" class="underline font-medium">Shop Now</a>
          </div>
          <img
            src="/src/assets/images/playstation.png"
            class="absolute right-0 bottom-0 h-[511px] object-contain"
            alt="PS5" />
        </div>

        <div class="grid grid-rows-2 gap-8">
          <div
            class="bg-[#0D0D0D] relative rounded text-white p-6 flex items-end">
            <div class="z-10">
              <h3 class="text-xl font-bold mb-2">Women's Collections</h3>
              <p class="text-xs text-gray-300 mb-2">
                Featured woman collections that give you another vibe.
              </p>
              <a href="#" class="underline font-medium">Shop Now</a>
            </div>
            <img
              src="/src/assets/images/woman.jpg"
              class="absolute right-0 bottom-0 h-[284px] object-contain transform scale-x-[-1]"
              alt="PS5" />
          </div>

          <div class="grid grid-cols-2 gap-8">
            <div
              class="bg-[#0D0D0D] relative rounded text-white p-4 flex items-end justify-center">
              <div class="z-10 relative">
                <h3 class="text-lg font-bold">Speakers</h3>
                <a href="#" class="underline text-xs">Shop Now</a>
              </div>
              <img
                src="/src/assets/images/speaker.png"
                class="absolute left-10 top-10 h-[300px] object-contain"
                alt="PS5" />
            </div>
            <div
              class="bg-[#0D0D0D] relative rounded text-white p-4 flex items-end justify-center">
              <div class="z-10 relative">
                <h3 class="text-lg font-bold">Perfume</h3>
                <a href="#" class="underline text-xs">Shop Now</a>
              </div>
              <img
                src="/src/assets/images/perfume.png"
                class="absolute right-0 bottom-0 h-[250px] object-contain"
                alt="PS5" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="container mx-auto px-4 mb-20 flex flex-col md:flex-row justify-center gap-20 text-center">
      <div>
        <div
          class="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-8px border-gray-200">
          <img src="/src/assets/images/Services.png" alt="" />
        </div>
        <h3 class="font-bold uppercase text-sm mb-1">Free and Fast Delivery</h3>
        <p class="text-xs text-gray-600">
          Free delivery for all orders over $140
        </p>
      </div>
      <div>
        <div
          class="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-8px border-gray-200">
          <img src="/src/assets/images/customer-care.png" alt="customer-care" />
        </div>
        <h3 class="font-bold uppercase text-sm mb-1">24/7 Customer Service</h3>
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

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductCard from "@/components/ProductCard.vue";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    Header,
    Footer,
    ProductCard,
  },
  data() {
    return {
      categories: [
        { name: "Phones", emoji: "/src/assets/images/Category-CellPhone.png" },
        {
          name: "Computers",
          emoji: "/src/assets/images/Category-Computer.png",
        },
        {
          name: "SmartWatch",
          emoji: "/src/assets/images/Category-SmartWatch.png",
        },
        { name: "Camera", emoji: "/src/assets/images/Category-Camera.png" },
        {
          name: "HeadPhones",
          emoji: "/src/assets/images/Category-HeadPhone.png",
        },
        { name: "Gaming", emoji: "/src/assets/images/Category-Gamepad.png" },
      ],
    };
  },
  computed: {
    // Get products from Vuex store
    // ...mapState(["products"]),
    ...mapState({
      storeproducts: (state) => state.products,
    }),
    products() {
      return Array.isArray(this.storeproducts) ? this.storeproducts : [];
    },
  },
  mounted() {
    // Fetch products when page loads

    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style>
/* Hide scrollbar for clean horizontal scrolling */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
