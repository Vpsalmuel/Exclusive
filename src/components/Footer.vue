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
          <img src="/src/assets/images/icon-send.png" alt="send-icon" />
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
          <div
            class="w-20 h-20 bg-gray-800 flex items-center justify-center text-xs">
            <img src="/src/assets/images/Qr Code.png" alt="QR Code" />
          </div>
          <div class="flex flex-col gap-2">
            <div
              class="w-24 h-8 bg-gray-800 flex items-center justify-center text-xs border border-gray-600">
              <img src="/src/assets/images/google-play.png" alt="Google Play" />
            </div>
            <div
              class="w-24 h-8 bg-gray-800 flex items-center justify-center text-xs border border-gray-600">
              <img src="/src/assets/images/AppStore.png" alt="App Store" />
            </div>
          </div>
        </div>
        <div class="flex space-x-6 mt-6 text-xl">
          <span
            ><img
              src="/src/assets/images/icon-Facebook.png"
              alt="Facebook"
              class="w-5 h-5" />
          </span>
          <span
            ><img
              src="/src/assets/images/icon-Linkedin.png"
              alt="LinkedIn"
              class="w-5 h-5"
          /></span>
          <span
            ><img
              src="/src/assets/images/icon-instagram.png"
              alt="Instagram"
              class="w-5 h-5"
          /></span>
          <span
            ><img
              src="/src/assets/images/icon-twitter.png"
              alt="Twitter"
              class="w-5 h-5"
          /></span>
        </div>
      </div>
    </div>

    <div
      class="text-center text-gray-600 text-sm mt-16 border-t border-gray-800 pt-4">
      &copy; Copyright Rimel 2022. All right reserved
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
