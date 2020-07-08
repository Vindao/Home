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
          ><nuxt-link style="text-decoration: none" :to="switchLocalePath(lang.code)">{{
            lang.name
          }}</nuxt-link>
        </v-btn>
      </v-row>
    </transition>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations, mapGetters } from 'vuex';
// constants
import { languages } from '../../constants/languages';
// types
import { LangCodeT } from '../../types/language';
export default Vue.extend({
  name: 'LanguagePicker',
  data: () => ({
    show: false,
    current: { code: 'en', name: 'English' }
  }),

  created() {
    this.current = languages[this.$i18n.locale];
  },

  methods: {
    toggle() {
      this.show = !this.show;
    },

    setLang(langCode: LangCodeT) {
      this.show = false;
      //@ts-ignore
      this.current = languages[langCode];
    },
    getSelectableLangs() {
      let toReturn = [];

      for (let lang in languages) {
        // TODO: change when dutch translation is done
        if (lang !== this.current.code && lang !== 'nl') {
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
