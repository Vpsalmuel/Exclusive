<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <div class="grow flex items-center justify-center py-10">
      <div
        class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div
          class="w-full md:w-1/2 bg-[#CBE4E8] rounded-r-lg overflow-hidden flex justify-end items-end pt-10 pr-10">
          <img
            src="/src/assets/images/Side Image.webp"
            alt="Shopping Phone"
            class="object-cover max-w-[919px] w-full" />
        </div>

        <div class="w-full md:w-1/3 pl-0 md:pl-10">
          <h2 class="text-3xl font-medium mb-2 tracking-wide">
            Create an account
          </h2>
          <p class="text-sm text-gray-600 mb-8">Enter your details below</p>

          <form @submit.prevent="handleSignup" class="flex flex-col gap-6">
            <input
              v-model="name"
              type="text"
              placeholder="Name"
              class="border-b border-gray-400 py-2 focus:outline-none focus:border-black"
              required />
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

            <button
              type="submit"
              class="bg-[#DB4444] text-white py-3 rounded hover:bg-red-600 transition font-medium mt-4">
              Create Account
            </button>

            <button
              type="button"
              class="border border-gray-400 py-3 rounded flex items-center justify-center gap-3 hover:bg-gray-50 transition">
              <svg class="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4" />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853" />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05" />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335" />
              </svg>
              Sign up with Google
            </button>
          </form>

          <p class="text-center text-sm text-gray-600 mt-6">
            Already have account?
            <router-link
              to="/login"
              class="font-medium text-black border-b border-gray-500 pb-0.5 ml-1"
              >Log in</router-link
            >
          </p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
// Import components
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "SignUpView",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSignup() {
      // 1. Create a user object
      const userData = {
        name: this.name,
        email: this.email,
        password: this.password, // In a real app, never send password like this!
      };

      try {
        // 2. Call the Vuex action
        await this.$store.dispatch("registerUser", userData);

        // 3. Clear form
        alert("Account Created Successfully!");

        // 4. Redirect (We will enable this once we build the Home or Login page)
        // this.$router.push('/');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
