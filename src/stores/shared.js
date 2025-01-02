import { defineStore } from 'pinia';

export const useSharedStore = defineStore('counter', {
    state: () => ({ language: localStorage.getItem('igourd_lang') || 'en' }),
    getters: {
        getLanguage: (state) => state.language,
    },
    actions: {
        updateLanguage(newLang) {
            this.language = newLang;
            localStorage.setItem('igourd_lang', newLang);
        },
    },
})