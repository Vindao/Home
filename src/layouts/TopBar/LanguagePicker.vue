<template>
  <v-row class="flex-row-reverse">
    <v-btn color="primary" text small @click="toggle">{{ current.name }} </v-btn>
    <transition name="languagePickerTrans">
      <v-row class="flex-row-reverse mr-0">
        <v-btn
          color="primary"
          text
          small
          v-show="show"
          v-for="lang in getSelectableLangs()"
          :key="lang.code"
          @click="setLang(lang.code)"
          >{{ lang.name }}
        </v-btn>
      </v-row>
    </transition>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations, mapGetters } from 'vuex';
// constants
import { languages, langCodes } from '../../constants/languages';
// types
import { LangCodeT } from '../../types/language';
export default Vue.extend({
  name: 'LanguagePicker',
  data: () => ({
    show: false
  }),
  computed: {
    ...mapGetters({ language: 'Language/language' }),
    current() {
      //@ts-ignore
      return languages[this.language];
    }
  },
  methods: {
    ...mapMutations({ changeLang: 'Language/changeLanguage' }),
    toggle() {
      this.show = !this.show;
    },

    setLang(langCode: LangCodeT) {
      this.show = false;
      //@ts-ignore
      this.changeLang(langCode);
    },
    getSelectableLangs() {
      let toReturn = [];

      for (let lang in languages) {
        if (lang !== this.language) {
          //@ts-ignore
          toReturn.push(languages[lang]);
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
