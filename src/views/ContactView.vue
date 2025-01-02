<script setup>
import { reactive, onMounted, ref } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const coordinates = [0.31926290142149866, 32.58643390355924];

const getDirections = () => {
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coordinates[0]},${coordinates[1]}`;
  window.open(googleMapsUrl, "_blank");
};

const businessTypes = [
  'Restaurant',
  'Cafe',
  'Supermarket',
  'Saloon',
  'Grocery Store',
  'Other',
];
const selectedTypes = ref([]);

// Reactive form data
const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
})

// Placeholder function to handle form submission
const submitForm = () => {
  console.log('Form submitted:', { ...form, businessType: selectedTypes.value.join(', ') })
  alert('Thank you for your message!')
}

onMounted(() => {
  const map = L.map("map", {
    scrollWheelZoom: false,
  }).setView(coordinates, 15); // Adjust zoom level as needed

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '',
  }).addTo(map);

  L.marker(coordinates).addTo(map).bindPopup("Igourd").openPopup();
});
</script>

<template>
  <section class="">
    <div class="w-full h-[300px] bg-blue-900">
      <div id="map" class="w-full h-full opacity-50" @click="getDirections"></div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 items-stretch">
      <!-- Left: Image Section -->
      <section class="contact_bg_image flex flex-col pt-20 px-6 py-24 lg:px-8">
        <div class="mx-auto max-w-2xl">
          <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-100 sm:text-5xl">{{
            $t('page_contact_title') }}</h2>
          <p class="my-5 text-lg/8 text-gray-300">
            {{ $t('page_contact_subtitle') }}
            {{ $t('page_contact_subtitle_help') }}
            <RouterLink to="/support" class="text-blue-500">{{ $t('page_contact_subtitle_helpLink') }}</RouterLink>
            {{ $t('page_contact_subtitle_helpLinkText') }}
          </p>

          <div class="grid grid-cols-1 gap-6">
            <a @click.prevent="getDirections" class="cursor-pointer">
              <div class="mt-5 flex items-start space-x-4">
                <div class="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                  </svg>
                </div>
                <div class="text-gray-300">
                  <h3 class="text-lg">{{ $t('page_contact_location') }}</h3>
                  <p class="text-sm">{{ $t('page_contact_locationAddress') }}</p>
                </div>
              </div>
            </a>
            <a href="tel:+256760180588" class="cursor-pointer">
              <div class="mt-5 flex items-start space-x-4">
                <div class="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div class="text-gray-300">
                  <h3 class="text-lg">+256 760 180588</h3>
                  <p class="text-sm">{{ $t('page_contact_phoneHelpText') }}</p>
                </div>
              </div>
            </a>
            <a href="mailto:luhaijun@igourd.com" class="cursor-pointer">
              <div class="mt-5 flex items-start space-x-4">
                <div class="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div class="text-gray-300">
                  <h3 class="text-lg">luhaijun@igourd.com</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- Form Section -->
      <section class="isolate bg-white px-6 py-24 sm:py-20 lg:px-8">
        <form @submit.prevent="submitForm" class="mx-auto max-w-xl">
          <div class="sm:grid-cols-2">
            <label for="first-name" class="mt-3 block text-sm/6 font-semibold text-gray-900">{{
              $t('page_contact_formName') }}</label>
            <div class="mt-1">
              <input type="text" id="name" v-model="form.name" required autocomplete="name"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500">
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="mt-3 block text-sm/6 font-semibold text-gray-900">{{
                $t('page_contact_formEmail') }}</label>
              <div class="mt-1">
                <input type="email" v-model="form.email" required id="email" autocomplete="email"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500">
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="phone-number" class="mt-3 block text-sm/6 font-semibold text-gray-900">{{ $t('page_contact_formPhone') }}</label>
              <div class="mt-1">
                <div
                  class="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-500">
                  <input type="text" name="phone" v-model="form.phone" required id="phone"
                    class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    placeholder="0771234567">
                </div>
              </div>
            </div>
            <div class="sm:col-span-2 my-5">
              <label for="message" class="mt-3 block text-sm/6 font-semibold text-gray-900">{{
                $t('page_contact_formBusinessType') }}</label>
              <div class="mt-2">
                <div class="grid grid-cols-3 gap-4">
                  <label class="flex items-center space-x-2">
                    <input type="checkbox" :value="restaurant" v-model="selectedTypes"
                      class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                    <span class="text-sm text-gray-700">{{ $t('page_contact_formBusiness_restaurant') }}</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input type="checkbox" :value="cafe" v-model="selectedTypes"
                      class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                    <span class="text-sm text-gray-700">{{ $t('page_contact_formBusiness_cafe') }}</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input type="checkbox" :value="supermarket" v-model="selectedTypes"
                      class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                    <span class="text-sm text-gray-700">{{ $t('page_contact_formBusiness_supermarket') }}</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input type="checkbox" :value="saloon" v-model="selectedTypes"
                      class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                    <span class="text-sm text-gray-700">{{ $t('page_contact_formBusiness_saloon') }}</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input type="checkbox" :value="grocery" v-model="selectedTypes"
                      class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                    <span class="text-sm text-gray-700">{{ $t('page_contact_formBusiness_grocer') }}</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input type="checkbox" :value="other" v-model="selectedTypes"
                      class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                    <span class="text-sm text-gray-700">{{ $t('page_contact_formBusiness_other') }}</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="mt-3 block text-sm/6 font-semibold text-gray-900">{{ $t('page_contact_formMessage') }}</label>
              <div class="mt-1">
                <textarea v-model="form.message" required id="message" rows="4"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500"></textarea>
              </div>
            </div>
            <div class="mt-2 flex gap-x-4 sm:col-span-2">
              <div class="flex h-6 items-center">
                <!-- Enabled: "bg-blue-500", Not Enabled: "bg-gray-200" -->
                <button type="button"
                  class="flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  role="switch" aria-checked="false" aria-labelledby="switch-1-label">
                  <span class="sr-only">Agree to policies</span>
                  <!-- Enabled: "translate-x-3.5", Not Enabled: "translate-x-0" -->
                  <span aria-hidden="true"
                    class="size-4 translate-x-0 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
                </button>
              </div>
              <label class="text-sm/6 text-gray-600" id="switch-1-label">
                {{ $t('page_contact_formPolicy_accept_prompt') }}
                <RouterLink to="/privacy" class="font-semibold text-blue-500">{{ $t('page_contact_formPolicy_accept_link') }}</RouterLink>.
              </label>
            </div>
          </div>
          <div class="mt-10 text-right">
            <button type="submit"
              class="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
              {{ $t('page_contact_formSubmit') }}
            </button>
          </div>
        </form>
      </section>
    </div>
  </section>
</template>

<style scoped>
#map {
  cursor: pointer;
  /* Indicate clickable map */
}

.contact_bg_image {
  background-image: url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>