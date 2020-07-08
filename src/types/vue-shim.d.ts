import Vue from 'vue';

import { LangCodeT } from './language';

declare module 'vue/types/vue' {
  interface Vue {
    $t: (query: string) => string;
    $i18n: {
      locale: LangCodeT;
    };
  }
}

declare module '*.vue' {
  export default Vue;
}
