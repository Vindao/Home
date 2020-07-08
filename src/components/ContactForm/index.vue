<template>
  <v-dialog v-model="contactOpen" scrollable max-width="600px">
    <v-card>
      <v-stepper v-model="step" class="elevation-0" style="min-height: 40vh">
        <v-stepper-header>
          <v-stepper-step key="1" :complete="step > 1" step="1" editable>
            {{ $t('Forms.stepper.info') }}
          </v-stepper-step>
          <v-divider />
          <v-stepper-step key="2" :complete="false" step="2">
            {{ $t('Forms.stepper.send') }}
          </v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <Step1 :setValues="setValues" :next="next" />
          </v-stepper-content>
          <v-stepper-content step="2">
            <Step2 :setValues="setValues" :submit="submit" :loading="loading" :error="error" />
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
//types
import { formValsT } from '@/types/Forms';
// custom
import validate from '../../utils/formValidation';
// components
import Step1 from './Step1.vue';
import Step2 from './Step2.vue';

export default Vue.extend({
  components: {
    Step1,
    Step2
  },
  data: () => ({
    formVals: {
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    },
    step: 1,
    loading: false,
    error: false
  }),
  computed: {
    contactOpen: {
      get() {
        return this.$store.state.UI.contactOpen;
      },
      set() {
        this.$store.commit('UI/toggleContact');
      }
    }
  },
  methods: {
    setValues(data: formValsT) {
      this.formVals = { ...this.formVals, ...data };
    },
    next() {
      this.step = 2;
    },

    async submit() {
      this.loading = true;
      axios
        .post('/.netlify/functions/message', JSON.stringify(this.formVals))
        .then(res => {
          if (res.data.success) {
            this.formVals.message = '';
            this.error = false;
            this.$store.commit('UI/toggleContact');
          } else {
            this.error = true;
          }
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
          this.error = true;
          this.loading = false;
        });
    }
  }
});
</script>

<style lang="scss">
.formBtnWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
}
</style>
