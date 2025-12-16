<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <div class="container mx-auto px-4 py-10 mb-20">
      <div class="text-sm mb-10 text-gray-500">
        <span class="text-gray-400"
          >Account / My Account / Product / View Cart /</span
        >
        <span class="text-black font-medium ml-1">CheckOut</span>
      </div>

      <h1 class="text-3xl font-medium mb-10 tracking-wide">Billing Details</h1>

      <div class="flex flex-col md:flex-row justify-between gap-20">
        <div class="w-full md:w-1/2">
          <form @submit.prevent="placeOrder" class="flex flex-col gap-8">
            <div class="flex flex-col gap-2">
              <label class="text-gray-400 text-sm"
                >First Name<span class="text-[#DB4444]">*</span></label
              >
              <input
                v-model="form.firstName"
                type="text"
                class="bg-gray-100 rounded h-12 px-4 outline-none focus:ring-1 focus:ring-gray-400"
                required />
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-gray-400 text-sm">Company Name</label>
              <input
                v-model="form.companyName"
                type="text"
                class="bg-gray-100 rounded h-12 px-4 outline-none focus:ring-1 focus:ring-gray-400" />
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-gray-400 text-sm"
                >Street Address<span class="text-[#DB4444]">*</span></label
              >
              <input
                v-model="form.address"
                type="text"
                class="bg-gray-100 rounded h-12 px-4 outline-none focus:ring-1 focus:ring-gray-400"
                required />
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-gray-400 text-sm"
                >Apartment, floor, etc. (optional)</label
              >
              <input
                v-model="form.apartment"
                type="text"
                class="bg-gray-100 rounded h-12 px-4 outline-none focus:ring-1 focus:ring-gray-400" />
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-gray-400 text-sm"
                >Town/City<span class="text-[#DB4444]">*</span></label
              >
              <input
                v-model="form.city"
                type="text"
                class="bg-gray-100 rounded h-12 px-4 outline-none focus:ring-1 focus:ring-gray-400"
                required />
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-gray-400 text-sm"
                >Phone Number<span class="text-[#DB4444]">*</span></label
              >
              <input
                v-model="form.phone"
                type="tel"
                class="bg-gray-100 rounded h-12 px-4 outline-none focus:ring-1 focus:ring-gray-400"
                required />
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-gray-400 text-sm"
                >Email Address<span class="text-[#DB4444]">*</span></label
              >
              <input
                v-model="form.email"
                type="email"
                class="bg-gray-100 rounded h-12 px-4 outline-none focus:ring-1 focus:ring-gray-400"
                required />
            </div>

            <div class="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                id="saveInfo"
                class="w-4 h-4 accent-[#DB4444]" />
              <label for="saveInfo" class="text-sm"
                >Save this information for faster check-out next time</label
              >
            </div>
          </form>
        </div>

        <div class="w-full md:w-5/12 pt-8">
          <div class="flex flex-col gap-6 mb-8">
            <div
              v-for="item in cart"
              :key="item.id"
              class="flex justify-between items-center">
              <div class="flex items-center gap-4">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-12 h-12 object-contain mix-blend-multiply" />
                <span class="text-sm w-32 truncate">{{ item.title }}</span>
              </div>
              <span class="text-sm text-gray-800"
                >${{ (item.price * item.qty).toFixed(2) }}</span
              >
            </div>
          </div>

          <div class="space-y-4 border-b border-gray-300 pb-6 mb-6">
            <div class="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>${{ cartTotal.toFixed(2) }}</span>
            </div>
            <div
              class="flex justify-between text-sm border-b border-gray-200 pb-4">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div class="flex justify-between text-base font-medium">
              <span>Total:</span>
              <span>${{ cartTotal.toFixed(2) }}</span>
            </div>
          </div>

          <div class="flex flex-col gap-4 mb-8">
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  id="bank"
                  value="bank"
                  v-model="paymentMethod"
                  class="w-4 h-4 accent-black" />
                <label for="bank" class="text-sm">Bank</label>
              </div>
              <div class="flex gap-2">
                <div
                  class="w-8 h-5 bg-white border rounded flex items-center justify-center text-[8px] font-bold text-blue-700 italic">
                  VISA
                </div>
                <div
                  class="w-8 h-5 bg-white border rounded flex items-center justify-center text-[8px] font-bold text-red-600">
                  MC
                </div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <input
                type="radio"
                name="payment"
                id="cod"
                value="cod"
                v-model="paymentMethod"
                class="w-4 h-4 accent-black" />
              <label for="cod" class="text-sm">Cash on delivery</label>
            </div>
          </div>

          <div class="flex gap-4 mb-8">
            <input
              type="text"
              placeholder="Coupon Code"
              class="border border-gray-400 rounded px-4 py-3 grow focus:outline-none focus:border-black" />
            <button
              class="bg-[#DB4444] text-white px-6 py-3 rounded hover:bg-red-600 transition text-sm whitespace-nowrap">
              Apply Coupon
            </button>
          </div>

          <button
            @click="placeOrder"
            class="bg-[#DB4444] text-white py-4 px-8 rounded w-fit hover:bg-red-600 transition font-medium">
            Place Order
          </button>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import { mapState, mapGetters } from "vuex";
import Header from "@/components/Header.vue";

export default {
  name: "CheckoutView",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      paymentMethod: "cod", // Default to Cash on Delivery
      form: {
        firstName: "",
        companyName: "",
        address: "",
        apartment: "",
        city: "",
        phone: "",
        email: "",
      },
    };
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartTotal"]),
  },
  methods: {
    placeOrder() {
      // 1. Validation (Basic check)
      if (this.cart.length === 0) {
        alert("Your cart is empty!");
        return;
      }
      if (
        !this.form.firstName ||
        !this.form.address ||
        !this.form.city ||
        !this.form.phone ||
        !this.form.email
      ) {
        alert("Please fill in all required fields marked with *");
        return;
      }

      // 2. Simulate Order Placement
      // In a real app, you would send 'this.form' and 'this.cart' to a backend API here.

      const confirmOrder = confirm(
        `Place order for $${this.cartTotal.toFixed(2)} using ${
          this.paymentMethod === "cod" ? "Cash on Delivery" : "Bank"
        }?`
      );

      if (confirmOrder) {
        // 3. Clear Cart
        this.$store.commit("CLEAR_CART");

        // 4. Show Success & Redirect
        alert("Order Placed Successfully!");
        this.$router.push("/");
      }
    },
  },
};
</script>
