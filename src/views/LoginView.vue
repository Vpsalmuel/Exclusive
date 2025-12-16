<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <div class="grow flex items-center justify-center py-10">
      <div
        class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div
          class="w-full md:w-1/2 bg-[#CBE4E8] rounded-r-lg overflow-hidden flex justify-start items-end pt-10 pr-10">
          <img
            src="/src/assets/images/Side Image.webp"
            alt="Shopping Phone"
            class="object-cover max-w-[919px] w-full" />
        </div>

        <div class="w-full md:w-1/3 pl-0 md:pl-10">
          <h2 class="text-3xl font-medium mb-2 tracking-wide">
            Log in to Exclusive
          </h2>
          <p class="text-sm text-gray-600 mb-8">Enter your details below</p>

          <form @submit.prevent="handleLogin" class="flex flex-col gap-6">
            <input
              v-model="email"
              type="text"
              placeholder="Email or Phone Number"
              class="border-b border-gray-400 py-2 focus:outline-none focus:border-black"
              required />
            <input
              v-model="password"
              type="password"
              placeholder="Password"
              class="border-b border-gray-400 py-2 focus:outline-none focus:border-black"
              required />

            <div class="flex items-center justify-between mt-4">
              <button
                type="submit"
                class="bg-[#DB4444] text-white py-3 px-12 rounded hover:bg-red-600 transition font-medium">
                Log In
              </button>

              <a href="#" class="text-[#DB4444] text-sm hover:underline"
                >Forget Password?</a
              >
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
  name: "LoginView",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      const credentials = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch("loginUser", credentials);
        // alert("Logged in successfully!");
        if (this.$router) {
          this.$router.push({ name: "home" });
        } else {
          window.location.href = "/";
        }
      } catch (error) {
        alert("Login failed. Please check your details.");
      }
    },
  },
};
</script>
