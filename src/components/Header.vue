<script setup>
import { ref, watch } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { Bars3Icon, BellIcon, XMarkIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { useI18n } from 'vue-i18n';
import LanguageSelector from "./LanguageSelector.vue";
import { useSharedStore } from '@/stores/shared';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router'

const { t } = useI18n();
const store = useSharedStore();
const { language } = storeToRefs(store);
const route = useRoute();

const getNavigation = () => {
  return [
    {name: t('nav_home'), href: "/", current: route.path === '/'},
    {name: t('nav_products'), href: "/products", current: route.path === '/products'},
    {name: t('nav_training'), href: "/training", current: route.path === '/training'},
    {name: t('nav_contact'), href: "/contact", current: route.path === '/contact'},
    {name: t('nav_join'), href: "/join", current: route.path === '/join'},
  ];
}

const navigation = ref(getNavigation());

watch(language, async (newlang, oldlang) => {
  navigation.value = getNavigation();
});
watch(route, async () => {
  navigation.value = getNavigation();
});
</script>

<template>
  <Disclosure as="nav" class="relative z-10" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 sm:h-20 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex shrink-0 items-center">
            <img class="h-8 w-auto relative top-[3px]" src="../assets/igourd_logo.svg" alt="Igourd"/>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <RouterLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                :class="[item.current ? 'text-blue-500 font-bold' : 'text-gray-400 hover:text-blue-500', 'rounded-md px-3 py-2']"
              >
                {{ item.name }}</RouterLink>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- Language dropdown -->
          <LanguageSelector/>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2 bg-white">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
