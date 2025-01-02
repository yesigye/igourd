<script setup>
import { ref, watch } from "vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
import { useI18n } from 'vue-i18n';
import { useSharedStore } from '@/stores/shared';
import { storeToRefs } from 'pinia';

const { locale, t } = useI18n();
const store = useSharedStore();
const { language } = storeToRefs(store);

const geLanguages = () => ([
  { name: "English", code: "en", current: store.language === 'en' },
  { name: "中文", code: "cn", current: store.language === 'cn' },
]);

const languages = ref(geLanguages());

const switchLanguage = (lang) => {
    locale.value = lang;
    store.updateLanguage(lang);
};
watch(language, async (newlang, oldlang) => {
    languages.value = geLanguages();
});
</script>

<template>
    <Menu as="div" class="relative ml-3">
        <div>
            <MenuButton class="relative flex items-center gap-x-2 rounded-full text-gray-400 hover:text-gray-500">
                {{ $t('language_name') }}
                <ChevronDownIcon class="flex-none size-5 text-gray-400" aria-hidden="true" />
            </MenuButton>
        </div>
        <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                <MenuItem v-for="language in languages" :key="language.name" :aria-current="language.current ? 'page' : undefined">
                    <a
                    :class="[
                        language.current
                        ? 'text-blue-500'
                        : 'text-gray-700 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium cursor-pointer',
                    ]"
                    class="block px-4 py-2 text-sm"
                    @click="switchLanguage(language.code)"
                    tag="button"
                    >{{language.name}}</a
                    >
                </MenuItem>
            </MenuItems>
        </transition>
    </Menu>
</template>