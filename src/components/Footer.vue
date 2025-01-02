<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useI18n } from 'vue-i18n';
import LanguageSelector from "./LanguageSelector.vue";

const { t } = useI18n();
</script>

<template>
  <footer class="bg-gray-800 text-gray-300 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Company Mission -->
        <div>
          <img class="h-8 w-auto block sm:my-3" src="../assets/igourd_logo.svg" alt="Igourd"/>
          <!-- <h3 class="text-lg font-bold text-white">{{ $t('footer_label_mission') }}</h3> -->
          <p class="mt-4 text-sm">{{ $t('footer_info') }}</p>
        </div>

        <div class="grid grid-cols-3 md:grid-cols-3 gap-8">
            <!-- Column 1 -->
            <div>
              <h3 class="text-lg font-bold text-white">{{ $t('footer_label_company') }}</h3>
              <ul class="mt-4 space-y-2">
                <li><a href="#" class="hover:text-blue-400">{{ $t('nav_about') }}</a></li>
                <li><a href="#" class="hover:text-blue-400">{{ $t('nav_join') }}</a></li>
                <li><a href="#" class="hover:text-blue-400">{{ $t('footer_label_careers') }}</a></li>
              </ul>
            </div>
            
            <!-- Column 2 -->
            <div>
              <h3 class="text-lg font-bold text-white">{{ $t('footer_label_resources') }}</h3>
              <ul class="mt-4 space-y-2">
                <li><RouterLink to="/support" :class="[$route.path === '/support' ? 'text-blue-400 font-bold' : '']" class="hover:text-blue-400">{{ $t('footer_label_help_center') }}</RouterLink></li>
                <li><RouterLink to="/support" :class="[$route.path === '/support' ? 'text-blue-400 font-bold' : '']" class="hover:text-blue-400">{{ $t('footer_label_guides') }}</RouterLink></li>
                <li><a href="#" class="hover:text-blue-400">{{ $t('footer_label_tutorials') }}</a></li>
              </ul>
            </div>
            
            <!-- Column 3 -->
            <div>
              <h3 class="text-lg font-bold text-white">{{ $t('footer_label_contact') }}</h3>
              <ul class="mt-4 space-y-2">
                <li><RouterLink to="/contact" :class="[$route.path === '/contact' ? 'text-blue-400 font-bold' : '']" class="hover:text-blue-400">{{ $t('nav_contact') }}</RouterLink></li>
                <li><RouterLink to="/contact" :class="[$route.path === '/contact' ? 'text-blue-400 font-bold' : '']" class="hover:text-blue-400">{{ $t('footer_label_sales') }}</RouterLink></li>
                <li><RouterLink to="/contact" :class="[$route.path === '/contact' ? 'text-blue-400 font-bold' : '']" class="hover:text-blue-400">{{ $t('footer_label_locations') }}</RouterLink></li>
              </ul>
            </div>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-700 pt-6 text-center">
        <p class="text-sm">
            &copy; 2024 Igourd.
            {{ $t('footer_label_rights_reserved') }}
            <RouterLink to="/privacy" class="text-blue-400">{{ $t('footer_label_privacy_policy') }}</RouterLink>
        </p>
      </div>
    </div>
  </footer>
</template>