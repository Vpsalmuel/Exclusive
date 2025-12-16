<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />

    <div class="container mx-auto px-4 py-10 mb-20">
      <div class="flex justify-between items-center mb-10 text-sm">
        <div class="text-gray-500">
          <router-link to="/" class="hover:text-black">Home</router-link>
          <span class="mx-2">/</span>
          <span class="text-black font-medium">My Account</span>
        </div>
        <div>
          Welcome!
          <span class="text-[#DB4444] font-medium">{{
            user ? user.name : "User"
          }}</span>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-16">
        <div class="w-full md:w-1/4 space-y-6">
          <div>
            <h3 class="font-medium mb-3">Manage My Account</h3>
            <ul class="space-y-2 text-gray-500 text-sm ml-4">
              <li class="text-[#DB4444] font-medium cursor-pointer">
                My Profile
              </li>
              <li class="hover:text-black cursor-pointer">Address Book</li>
              <li class="hover:text-black cursor-pointer">
                My Payment Options
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-medium mb-3">My Orders</h3>
            <ul class="space-y-2 text-gray-500 text-sm ml-4">
              <li class="hover:text-black cursor-pointer">My Returns</li>
              <li class="hover:text-black cursor-pointer">My Cancellations</li>
            </ul>
          </div>

          <div>
            <h3 class="font-medium mb-3">My WishList</h3>
          </div>
        </div>

        <div
          class="w-full md:w-3/4 shadow-sm p-8 md:px-16 md:py-10 bg-white border border-gray-100 rounded">
          <h2 class="text-xl font-medium text-[#DB4444] mb-6">
            Edit Your Profile
          </h2>

          <form @submit.prevent="saveChanges" class="flex flex-col gap-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="flex flex-col gap-2">
                <label class="text-sm">First Name</label>
                <input
                  v-model="form.firstName"
                  type="text"
                  class="bg-gray-100 rounded h-12 px-4 outline-none focus:ring-1 focus:ring-gray-300"
                  placeholder="Md" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm">Last Name</label>
                <input
                  v-model="form.lastName"
                  type="text"
                  class="bg-gray-100 rounded h-12 px-4 outline-none focus:ring-1 focus:ring-gray-300"
                  placeholder="Rimel" />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="flex flex-col gap-2">
                <label class="text-sm">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  class="bg-gray-100 rounded h-12 px-4 outline-none focus:ring-1 focus:ring-gray-300"
                  placeholder="rimel1111@gmail.com" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm">Address</label>
                <input
                  v-model="form.address"
                  type="text"
                  class="bg-gray-100 rounded h-12 px-4 outline-none focus:ring-1 focus:ring-gray-300"
                  placeholder="Kingston, 5236, United State" />
              </div>
            </div>

            <div class="flex flex-col gap-4 mt-2">
              <label class="text-sm">Password Changes</label>

              <input
                v-model="form.currentPassword"
                type="password"
                placeholder="Current Password"
                class="bg-gray-100 rounded h-12 px-4 outline-none focus:ring-1 focus:ring-gray-300 w-full" />

              <input
                v-model="form.newPassword"
                type="password"
                placeholder="New Password"
                class="bg-gray-100 rounded h-12 px-4 outline-none focus:ring-1 focus:ring-gray-300 w-full" />

              <input
                v-model="form.confirmPassword"
                type="password"
                placeholder="Confirm New Password"
                class="bg-gray-100 rounded h-12 px-4 outline-none focus:ring-1 focus:ring-gray-300 w-full" />
            </div>

            <div class="flex justify-end gap-6 items-center mt-4">
              <button
                type="button"
                class="text-gray-500 hover:text-black transition">
                Cancel
              </button>
              <button
                type="submit"
                class="bg-[#DB4444] text-white py-3 px-8 rounded hover:bg-red-600 transition shadow-md">
                Save Changes
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
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { mapState } from "vuex";

export default {
  name: "AccountView",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      form: {
        firstName: "Md",
        lastName: "Rimel",
        email: "rimel1111@gmail.com",
        address: "Kingston, 5236, United State",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    async saveChanges() {
      // Basic validation for password match
      if (
        this.form.newPassword &&
        this.form.newPassword !== this.form.confirmPassword
      ) {
        alert("New passwords do not match!");
        return;
      }

      // Create object to save
      const updatedProfile = {
        name: this.form.firstName + " " + this.form.lastName, // Updating the 'name' in our simple user object
        email: this.form.email,
        address: this.form.address,
        // In a real app, you'd send password data securely here
      };

      try {
        await this.$store.dispatch("updateProfile", updatedProfile);
        alert("Profile Updated Successfully!");
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    if (this.user) {
      const names = this.user.name
        ? this.user.name.split(" ")
        : ["Md", "Rimel"];
      this.form.firstName = names[0];
      this.form.lastName = names.slice(1).join(" ") || "";
      this.form.email = this.user.email || "";
    }
  },
};
</script>
