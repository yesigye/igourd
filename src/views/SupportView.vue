<script setup>
import { useI18n } from 'vue-i18n';
import products from '../services/products.json';
import FrequentQuestions from '../components/FrequentQuestions.vue'

const devices = products.map(prod => ({...prod, file: new URL(`../assets/products/${prod.file}`, import.meta.url).href}));

const { t } = useI18n();
</script>

<template>
    <main>
        <div class="bg-blue-800 relative">
            <img class="w-full opacity-10 top-0 left-0" src="../assets/tech_support.png" alt="Igourd" />
            <div class="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center">
                <h3 class="text-lg text-white">{{ $t('page_support_title') }}</h3>
                <h1 class="text-[2rem] text-white sm:mt-[2vh]">{{ $t('page_support_subtitle') }}</h1>
            </div>
        </div>

        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div class="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                    </svg>
                    <h3 class="mt-3 text-lg">{{ $t('page_support_label_tech_support') }}</h3>
                </div>
                <div class="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                    </svg>
                    <h3 class="mt-3 text-lg">{{ $t('page_support_label_inquiry') }}</h3>
                </div>
                <div class="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                    <h3 class="mt-3 text-lg">{{ $t('page_support_label_product') }}</h3>
                </div>
                <div class="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    <h3 class="mt-3 text-lg">{{ $t('page_support_label_download') }}</h3>
                </div>
            </div>
        </div>
        
        
        <div class="bg-gray-100">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 class="text-[2rem] text-center">{{ $t('page_support_label_select_product') }}</h1>
                <h3 class="text-lg text-center  sm:mt-[0.5vh]">{{ $t('page_support_label_select_product_description') }}</h3>
                
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-[3vh]">
                    <div class="flex flex-col items-center" v-for="item in devices" :key="item.name">
                        <img class="h-[110px]" :src="`${item.file}`" alt="product"/>
                        <h3 class="mt-3 text-lg">{{ $t(item.name) }}</h3>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="my-50 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 class="text-[2rem] mb-3">{{ $t('page_support_label_frequent_questions') }}</h1>
            <FrequentQuestions/>
        </div>
    </main>
</template>
