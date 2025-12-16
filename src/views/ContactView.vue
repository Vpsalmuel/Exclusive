<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <div class="container mx-auto px-4 py-10 mb-20">
      <div class="text-sm mb-10 text-gray-500">
        <router-link to="/" class="hover:text-black">Home</router-link>
        <span class="mx-2">/</span>
        <span class="text-black font-medium">Contact</span>
      </div>

      <div class="flex flex-col md:flex-row gap-8">
        <div
          class="w-full md:w-1/3 bg-white shadow-sm border border-gray-100 rounded p-8">
          <div class="mb-8">
            <div class="flex items-center gap-4 mb-4">
              <div
                class="w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 class="font-medium text-lg">Call To Us</h3>
            </div>
            <p class="text-sm text-gray-600 mb-2">
              We are available 24/7, 7 days a week.
            </p>
            <p class="text-sm text-gray-600">Phone: +8801611112222</p>
          </div>

          <hr class="border-gray-300 mb-8" />

          <div>
            <div class="flex items-center gap-4 mb-4">
              <div
                class="w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="font-medium text-lg">Write To US</h3>
            </div>
            <p class="text-sm text-gray-600 mb-2">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p class="text-sm text-gray-600 mb-2">
              Emails: customer@exclusive.com
            </p>
            <p class="text-sm text-gray-600">Emails: support@exclusive.com</p>
          </div>
        </div>

        <div
          class="w-full md:w-2/3 bg-white shadow-sm border border-gray-100 rounded p-8">
          <form @submit.prevent="sendMessage">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input
                v-model="form.name"
                type="text"
                placeholder="Your Name *"
                class="bg-gray-100 rounded h-12 px-4 outline-none focus:ring-1 focus:ring-gray-300"
                required />
              <input
                v-model="form.email"
                type="email"
                placeholder="Your Email *"
                class="bg-gray-100 rounded h-12 px-4 outline-none focus:ring-1 focus:ring-gray-300"
                required />
              <input
                v-model="form.phone"
                type="tel"
                placeholder="Your Phone *"
                class="bg-gray-100 rounded h-12 px-4 outline-none focus:ring-1 focus:ring-gray-300"
                required />
            </div>

            <textarea
              v-model="form.message"
              placeholder="Your Message"
              class="w-full bg-gray-100 rounded p-4 h-52 outline-none focus:ring-1 focus:ring-gray-300 resize-none mb-4"></textarea>

            <div class="flex justify-end">
              <button
                type="submit"
                class="bg-[#DB4444] text-white py-3 px-10 rounded hover:bg-red-600 transition font-medium">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "ContactView",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    sendMessage() {
      // Logic to send message would go here
      console.log("Message sent:", this.form);
      alert("Your message has been sent successfully!");
      // Reset form
      this.form = { name: "", email: "", phone: "", message: "" };
    },
  },
};
</script>
