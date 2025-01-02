<script setup>
</script>

<template>
    <div class="border-t pt-10">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-3xl font-bold text-gray-800 mb-6">{{ $t('page_privacyPolicy_title') }}</h1>
          
          <p class="text-sm text-gray-500 mb-8" v-html="$t('page_privacyPolicy_statement').slice(1, -1)"></p>
      
          <div class="space-y-4">
            <div
              v-for="(section, index) in privacySections"
              :key="index"
              class="border-b pb-4"
            >
              <button
                @click="toggleSection(index)"
                class="flex items-center justify-between w-full text-left text-lg font-medium text-gray-700"
              >
                <span>{{ section.title }}</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    :class="isOpen(index) ? 'rotate-180' : ''"
                    class="h-5 w-5 text-gray-500 transform transition-transform"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
      
              <div
                v-if="isOpen(index)"
                class="mt-2 text-gray-600 text-sm"
              >
                <p v-for="(line, lineIndex) in section.content" :key="lineIndex">
                  {{ line }}
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>