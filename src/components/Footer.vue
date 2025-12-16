<template>
  <footer class="bg-black text-white pt-16 pb-8 mt-20">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
      <div>
        <h2 class="text-xl font-bold mb-4">Exclusive</h2>
        <h3 class="text-lg font-medium mb-4">Subscribe</h3>
        <p class="text-sm mb-4">Get 10% off your first order</p>
        <div
          class="border border-white rounded flex items-center p-2 max-w-[200px]">
          <input
            type="email"
            placeholder="Enter your email"
            class="bg-transparent text-sm flex-1 outline-none text-white placeholder-gray-400" />
          <img :src="sendIcon" alt="send-icon" />
        </div>
      </div>

      <div>
        <h3 class="text-lg font-medium mb-4">Support</h3>
        <p class="text-sm mb-2">
          111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
        </p>
        <p class="text-sm mb-2">exclusive@gmail.com</p>
        <p class="text-sm">+88015-88888-9999</p>
      </div>

      <div>
        <h3 class="text-lg font-medium mb-4">Account</h3>
        <ul class="text-sm space-y-3">
          <li>My Account</li>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-medium mb-4">Quick Link</h3>
        <ul class="text-sm space-y-3">
          <li>Privacy Policy</li>
          <li>Terms Of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-medium mb-4">Download App</h3>
        <p class="text-xs text-gray-400 mb-4">Save $3 with App New User Only</p>

        <div class="flex gap-2">
          <div class="w-20 h-20 bg-gray-800 flex items-center justify-center">
            <img :src="qrCode" alt="QR Code" />
          </div>

          <div class="flex flex-col gap-2">
            <div
              class="w-24 h-8 bg-gray-800 flex items-center justify-center border border-gray-600">
              <img :src="googlePlay" alt="Google Play" />
            </div>
            <div
              class="w-24 h-8 bg-gray-800 flex items-center justify-center border border-gray-600">
              <img :src="appStore" alt="App Store" />
            </div>
          </div>
        </div>

        <div class="flex space-x-6 mt-6 text-xl">
          <img :src="facebook" class="w-5 h-5" alt="Facebook" />
          <img :src="linkedin" class="w-5 h-5" alt="LinkedIn" />
          <img :src="instagram" class="w-5 h-5" alt="Instagram" />
          <img :src="twitter" class="w-5 h-5" alt="Twitter" />
        </div>
      </div>
    </div>

    <div
      class="text-center text-gray-600 text-sm mt-16 border-t border-gray-800 pt-4">
      © Copyright Rimel 2022. All right reserved
    </div>
  </footer>
</template>

<script>
import sendIcon from "@/assets/images/icon-send.png";
import qrCode from "@/assets/images/Qr Code.png";
import googlePlay from "@/assets/images/google-play.png";
import appStore from "@/assets/images/AppStore.png";
import facebook from "@/assets/images/icon-Facebook.png";
import linkedin from "@/assets/images/icon-Linkedin.png";
import instagram from "@/assets/images/icon-instagram.png";
import twitter from "@/assets/images/icon-twitter.png";

export default {
  name: "Footer",
  data() {
    return {
      sendIcon,
      qrCode,
      googlePlay,
      appStore,
      facebook,
      linkedin,
      instagram,
      twitter,
    };
  },
};
</script>
