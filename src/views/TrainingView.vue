<script setup>
import { ref, watch } from "vue";
import training_en from "../services/training/english.json";
import training_cn from "../services/training/chinese.json";
import { useSharedStore } from '@/stores/shared';
import { storeToRefs } from 'pinia';

const store = useSharedStore();
const { language } = storeToRefs(store);
const openIndex = ref(null);

const fetContent = () => {
    switch (language.value) {
        case "en":
            return training_en;
        case "cn":
            return training_cn;
        default:
            return training_en;
    }
}

const training = ref(fetContent());

const toggleAccordion = (index) => {
    openIndex.value = openIndex.value === index ? null : index;
};

watch(language, async (newlang, oldlang) => {
    training.value = fetContent();
});
</script>

<template>
    <section class="bg-gray-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                <h2 class="text-2xl font-bold text-gray-900">{{ $t('page_training_title') }}</h2>
                <p class="mt-2 text-lg text-gray-500">{{ $t('page_training_description') }}</p>

                <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                    <div class="group relative" v-for="content in training.filter(t => t.type === 'video')" :key="content.name">
                        <div
                            class="w-full rounded-lg bg-white object-cover group-hover:opacity-75">
                            <iframe :src="`${content.url}`" class="w-full aspect-video" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <h3 class="mt-6 text-gray-500">{{ content.title }}</h3>
                        <p class="text-sm font-semibold text-gray-900">{{ content.subtitle }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <a 
            v-for="content in training.filter(t => t.type === 'external')"
            :key="content.name"
            :href="`${content.url}`"
            target="_blank"
            class="block mb-3 cursor-pointer text-gray-900 w-full rounded-md bg-gray-200 px-3 py-4 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 inline-block relative top-[-2px] mr-2 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
            {{ content.title }}
        </a>
        <p class="mt-10">
            {{ $t('page_training_help') }} <RouterLink to="/contact" class="text-blue-500">{{ $t('nav_contact') }}</RouterLink>
        </p>
    </section>
</template>