import Vue from 'vue';
import VueGtag from 'vue-gtag';

Vue.use(VueGtag, {
  config: { id: 'UA-168007547-1', anonymize_ip: true }
});
