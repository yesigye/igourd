<script setup>
</script>

<template>
    <section class="relative flex top-[-4rem] mb-[-4rem] sm:top-[-5rem] sm:mb-[-5rem] bg-gradient-to-b from-black via-black/80 to-white">
        <img src="../assets/joinus_hero.png" alt="" class="opacity-5 w-full h-[300px] sm:h-auto"/>
        <div class="absolute top-0 left-0 w-full h-full">
          <div class="flex flex-col items-center justify-center h-full w-full">
            <div class="w-[80%] lg:w-1/2 text-center pt-20">
                <h1 class="text-lg font-bold leading-snug tracking-tight text-gray-100 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                    {{ $t('page_join_title') }}
                  </h1>
                  <p class="py-5 text-md leading-normal text-gray-200 lg:text-xl xl:text-2xl">
                    {{ $t('page_join_subtitle') }}
                </p>
            </div>
          </div>
        </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 items-stretch">
        <!-- Left: Image Section -->
        <section class="contact_bg_image flex flex-col pt-20 px-6 py-2 lg:px-8">
          <div class="mx-auto max-w-2xl">
            <h2 class="text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">{{
              $t('page_joinTeam_title') }}</h2>
            <p class="my-5 text-gray-800">
              {{ $t('page_joinTeam_subtitle') }}
            </p>
  
            <div class="grid grid-cols-1 gap-3">
              <a @click.prevent="getDirections" class="cursor-pointer">
                <div class="mt-2 flex items-start space-x-4">
                  <div class="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-8">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                    </svg>
                  </div>
                  <div class="text-gray-800">
                    <h3 class="font-bold">{{ $t('page_contact_location') }}</h3>
                    <p class="text-sm">{{ $t('page_contact_locationAddress') }}</p>
                  </div>
                </div>
              </a>
              <a href="tel:+256760180588" class="cursor-pointer">
                <div class="mt-2 flex items-start space-x-4">
                  <div class="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div class="text-gray-800">
                    <h3 class="font-bold">+256 760 180588</h3>
                    <p class="text-sm">{{ $t('page_contact_phoneHelpText') }}</p>
                  </div>
                </div>
              </a>
              <a href="mailto:luhaijun@igourd.com" class="cursor-pointer">
                <div class="mt-2 flex items-start space-x-4">
                  <div class="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div class="text-gray-800">
                    <h3 class="font-bold">luhaijun@igourd.com</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
  
        <section class="isolate bg-white px-6 py-2 sm:py-20 lg:px-8">
          <img class="rounded-3xl" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80" alt=""/>
        </section>
      </div>
    </section>

    <!-- CV upload -->
    <section class="my-3 pb-5 flex flex-col justify-center items-center text-center w-full">
      <h1 class="text-gray-500 my-3">Upload your CV and we'll get back to you</h1>
      <form @submit.prevent="" class="flex flex-row justify-center items-center w-full">
        <input type="file" class="inline-block px-3 py-3 w-[300px] sm:w-[500px] border"/>
        <button class="inline-block rounded-sm px-3 py-3 bg-blue-500 text-white h-[55px]">Send CV</button>
      </form>
    </section>

    <section class="bg-gray-200 text-center py-10">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 class="text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">{{ $t('page_joinTeam_noJobs_title') }}</h2>
        <p class="my-3 text-gray-800">
          {{ $t('page_joinTeam_noJobs_subtitle') }}
        </p>
      </div>
    </section>
</template>

<style scoped>
.join_bg_image {
  background-image: url('../assets/products/demo_1.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
</style>