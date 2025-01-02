<script setup>
</script>

<template>
  <!-- Products Section -->
  <section class="bg-white mb-5" id="productsServices">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 xl:gap-x-8">
        <div class="group product_bg_image_1 bg-gray-200 group-hover:opacity-75 lg:h-[20vw]"></div>
        <div class="group product_bg_image_2 bg-gray-200 group-hover:opacity-75 lg:h-[20vw]"></div>
        <div class="group product_bg_image_3 bg-gray-200 group-hover:opacity-75 lg:h-[20vw]"></div>
        <div class="group product_bg_image_4 bg-gray-200 group-hover:opacity-75 lg:h-[20vw]"></div>
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="flex items-start space-x-4">
          <div class="text-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg text-gray-900">{{ $t('page_home_stats_ease_title') }}</h3>
            <p class="text-sm text-gray-600">{{ $t('page_home_stats_ease_description') }}</p>
          </div>
        </div>

        <!-- Column 2 -->
        <div class="flex items-start space-x-4">
          <div class="text-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg text-gray-900">{{ $t('page_home_stats_fast_title') }}</h3>
            <p class="text-sm text-gray-600">{{ $t('page_home_stats_fast_description') }}</p>
          </div>
        </div>

        <!-- Column 3 -->
        <div class="flex items-start space-x-4">
          <div class="text-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg text-gray-900">{{ $t('page_home_stats_config_title') }}</h3>
            <p class="text-sm text-gray-600">{{ $t('page_home_stats_config_description') }}</p>
          </div>
        </div>

        <!-- Column 4 -->
        <div class="flex items-start space-x-4">
          <div class="text-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg text-gray-900">{{ $t('page_home_stats_support_title') }}</h3>
            <p class="text-sm text-gray-600">{{ $t('page_home_stats_support_description') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.product_bg_image_1,
.product_bg_image_2,
.product_bg_image_3,
.product_bg_image_4 {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.product_bg_image_1 {
  background-image: url('../assets/products/demo_1.png');
}

.product_bg_image_2 {
  background-image: url('../assets/products/demo_2.png');
}

.product_bg_image_3 {
  background-image: url('../assets/products/demo_3.webp');
}

.product_bg_image_4 {
  background-image: url('../assets/products/demo_4.png');
}
</style>