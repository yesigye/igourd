<script setup>
import { ref, watch } from "vue";
import faqs_en from "../languages/frequentQuestions/english.json";
import faqs_cn from "../languages/frequentQuestions/chinese.json";
import { useSharedStore } from '@/stores/shared';
import { storeToRefs } from 'pinia';

const store = useSharedStore();
const { language } = storeToRefs(store);
const openIndex = ref(null);

const translateFaqs = () => {
    switch (language.value) {
        case "en":
            return faqs_en;
        case "cn":
            return faqs_cn;
        default:
            return faqs_en;
    }
}

const faqs = ref(translateFaqs());

const toggleAccordion = (index) => {
    openIndex.value = openIndex.value === index ? null : index;
};

watch(language, async (newlang, oldlang) => {
    faqs.value = translateFaqs();
});
</script>

<template>
    <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="border-b">
            <button @click="toggleAccordion(index)"
                class="w-full text-left py-4 text-lg font-medium flex justify-between items-center">
                {{ faq.question }}
                <span>
                    <svg v-if="openIndex === index" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </span>
            </button>
            <div v-show="openIndex === index" class="p-4 text-gray-600">
                {{ faq.answer }}
            </div>
        </div>
    </div>
</template>