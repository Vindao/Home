<template>
  <div class="flex row">
    <transition name="languagePickerTrans">
      <div v-show="show" class="flex row-reverse">
        <q-item
          @click="setLocale(lang.code)"
          clickable
          v-for="lang in getSelectableLocales()"
          :key="lang.code"
        >
          <q-item-section v-if="lang.code !== userLang">
            <q-item-label>{{ lang.name }}</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </transition>
    <q-item clickable @click="toggle">
      <q-item-section>
        <q-item-label>{{ locales[userLang].name }}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import { LangCodeT } from '../../../../../../types/language';
export default Vue.extend({
  name: 'LanguagePicker',
  data() {
    return {
      show: false,
      locales: {
        de: { code: 'de', name: 'Deutsch' },
        nl: { code: 'nl', name: 'Nederlands' },
        en: { code: 'en', name: 'English' }
      }
    };
  },
  computed: {
    ...mapGetters(['userLang'])
  },
  methods: {
    ...mapActions(['changeLanguage']),
    toggle() {
      this.show = !this.show;
    },

    setLocale(locale: LangCodeT) {
      this.show = false;

      this.changeLanguage(locale);
    },
    getSelectableLocales() {
      let toReturn = [];
      for (let locale in this.locales) {
        if (locale !== this.userLang) {
          //@ts-ignore
          toReturn.push(this.locales[locale]);
        }
      }
      return toReturn;
    }
  }
});
</script>

<style lang="scss" scoped>
@keyframes languageEnter {
  0% {
    transform: translatey(-100%);
    opacity: 0;
  }
  100% {
    transform: translatey(0%);
    opacity: 1;
  }
}
.languagePickerTrans-enter-active {
  animation: languageEnter 0.5s;
}
.languagePickerTrans-leave-active {
  animation: languageEnter 0.5s reverse;
}
</style>
