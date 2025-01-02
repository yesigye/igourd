<script setup>
import ProductsView from '../views/ProductsView.vue';
</script>

<template>
  <!-- Hero Section -->
  <section
    class="relative h-[800px] top-[-5rem] mb-[-5rem] bg-gradient-to-br from-gray-900 via-gray-800 via-blue-900 to-blue-600">
    <div class="absolute inset-0 overflow-hidden bg-gray-900">
      <img src="../assets/home_hero.png" alt="home" class="w-full h-full object-cover opacity-5" />
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-blue-600 opacity-10"></div>
    </div>
    <div class="relative max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-center ">
      <div class="flex flex-col items-center justify-center text-center text-white">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold">{{ $t('page_hero_title') }}</h1>
        <p class="mt-4 text-lg max-w-2xl">{{ $t('page_hero_subtitle') }}</p>
        <div class="mt-6 flex justify-center gap-4">
          <RouterLink to="/contact" class="inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)] rounded-full border border-transparent bg-gray-950 shadow-md whitespace-nowrap text-base font-medium text-white data-[disabled]:bg-gray-950 data-[hover]:bg-gray-800 data-[disabled]:opacity-40"
            data-headlessui-state="" href="#">
            {{ $t('nav_contact') }}
          </RouterLink>
          <RouterLink to="/products" class="relative inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)] rounded-full border border-transparent bg-white/15 shadow-md ring-1 ring-[#D15052]/15 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d] whitespace-nowrap text-base font-medium text-gray-300 data-[disabled]:bg-white/15 data-[hover]:bg-white/20 data-[disabled]:opacity-40"
            data-headlessui-state="" href="/pricing">{{ $t('nav_products') }}</RouterLink>
        </div>
      </div>
    </div>
  </section>

  <!-- Products Section -->
  <ProductsView/>

  <!-- Product Features Section -->
  <section class="bg-gray-50 py-24 sm:py-32">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-center text-base/7 font-semibold text-indigo-600">{{ $t('product_feature_title') }}</h2>
      <p
        class="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
        {{ $t('product_feature_description') }}
      </p>
      <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
        <div class="relative lg:row-span-2">
          <div class="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
          <div
            class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">{{
                $t('product_feature_ui') }}</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">{{
                $t('product_feature_ui_description') }}</p>
            </div>
            <div class="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
              <div
                class="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                <img class="size-full object-cover object-top" src="../assets/myHer.png" alt="">
              </div>
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]">
          </div>
        </div>
        <div class="relative max-lg:row-start-1">
          <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
          <div
            class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
            <div class="px-8 pt-8 sm:px-10 sm:pt-10">
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">{{
                $t('product_feature_performance') }}</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">{{
                $t('product_feature_performance_description') }}</p>
            </div>
            <div class="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
              <img class="w-full max-lg:max-w-xs"
                src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png" alt="">
            </div>
          </div>
          <div
            class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]">
          </div>
        </div>
        <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
          <div class="absolute inset-px rounded-lg bg-white"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
            <div class="px-8 pt-8 sm:px-10 sm:pt-10">
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">{{
                $t('product_feature_security') }}</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">{{
                $t('product_feature_security_description') }}</p>
            </div>
            <div class="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
              <img class="h-[min(152px,40cqw)] object-cover"
                src="https://tailwindui.com/plus/img/component-images/bento-03-security.png" alt="">
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
        </div>
        <div class="relative lg:row-span-2">
          <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          <div
            class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">{{
                $t('product_feature_software') }}</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">{{
                $t('product_feature_software_description') }}</p>
            </div>
            <div class="relative min-h-[30rem] w-full grow">
              <div class="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-800">
                <img src="../assets/softwareUI.png" alt="" class="absolute top-0 left-0 h-full w-105%" />
              </div>
            </div>
          </div>
          <div
            class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>