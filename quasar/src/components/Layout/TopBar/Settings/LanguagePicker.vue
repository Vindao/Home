<template>
  <div class="flex row">
    <transition name="languagePickerTrans">
      <div v-show="show" class="flex row-reverse">
        <q-item
          clickable
          v-for="lang in getSelectableLocales()"
          :key="lang.code"
          @click="setLocale(lang.code)"
        >
          <q-item-section v-if="lang.code !== lang">
            <q-item-label>{{ lang.name }}</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </transition>
    <q-item clickable @click="toggle">
      <q-item-section>
        <q-item-label>{{ current.name }}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
// constants
import { Languages } from '../../../../constants/language';
// types
import { LangCodeT } from '../../../../../../types/language';
export default Vue.extend({
  name: 'LanguagePicker',
  data() {
    return {
      show: false
    };
  },
  computed: {
    ...mapGetters(['language']),
    current() {
      //@ts-ignore
      return Languages[this.language];
    }
  },
  methods: {
    ...mapActions(['changeUserLang']),
    toggle() {
      this.show = !this.show;
    },

    setLocale(langCode: LangCodeT) {
      this.show = false;
      this.changeUserLang(langCode);
    },
    getSelectableLocales() {
      let toReturn = [];
      for (let lang in Languages) {
        if (lang !== this.language) {
          //@ts-ignore
          toReturn.push(Languages[lang]);
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
