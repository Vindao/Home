<template>
  <v-card>
    <v-form @submit="submit" v-model="valid">
      <div class="stepWrapper">
        <v-stepper v-model="step" class="elevation-0" style="min-height: 40vh">
          <v-stepper-header>
            <v-stepper-step key="1" :complete="step > 1" step="1" editable>
              {{ text.Forms.stepper.info }}
            </v-stepper-step>

            <v-divider />
            <v-stepper-step key="2" :complete="false" step="2">
              {{ text.Forms.stepper.send }}
            </v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <div>
                <v-text-field
                  :rules="validate('name')"
                  v-model="formVals.name"
                  :label="text.Forms.name.label + '*'"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="formVals.email"
                  :rules="validate('email')"
                  :label="text.Forms.email.label + '*'"
                  type="email"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="formVals.company"
                  :rules="validate('company')"
                  :label="text.Forms.company.label"
                  type="text"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="formVals.phone"
                  :rules="validate('phone')"
                  :label="text.Forms.phone.label"
                  type="phone"
                  required
                ></v-text-field>
              </div>
            </v-stepper-content>
            <v-stepper-content step="2">
              <textarea
                autofocus
                :placeholder="text.Forms.message.label"
                v-model="formVals.message"
                class="textArea"
              />
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
        <div class="formBtnWrapper pb-6">
          <v-btn
            :loading="loading"
            x-large
            :disabled="!valid"
            color="secondary"
            class="primary--text"
            type="submit"
            >{{ step === 1 ? text.Forms.BTNS.next : text.Forms.BTNS.send }}</v-btn
          >
        </div>
      </div>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import validate from '../utils/formValidation';
export default Vue.extend({
  data: () => ({
    formVals: {
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    },
    step: 1,
    valid: false,
    start: true,
    loading: false
  }),
  computed: {
    ...mapGetters({ text: 'Language/text' })
  },
  methods: {
    validate(type: string) {
      //@ts-ignore
      const val: string = this.formVals[type];
      const valid = validate(type, val);
      let toReturn: string[] = [];
      for (let error of valid) {
        toReturn.push(this.text.Forms[type].errors[error]);
      }
      return toReturn.length === 0 ? [true] : toReturn;
    },
    submit(e: any) {
      e.preventDefault();
      if (this.step === 1) {
        this.step = 2;
      } else {
        this.sendMessage();
      }
    },

    async sendMessage() {
      this.loading = true;
      console.log(this.formVals);
      //@ts-ignore
      const result = await this.$axios.$post('/.netlify/lambda/message', this.formVals);
      if (result.success) {
        console.log('success');
        this.formVals.message = '';
        this.$store.commit('UI/toggleContact');
      } else {
        console.log('error');
      }

      this.loading = false;
    }
  }
});
</script>

<style lang="scss" scoped>
.stepWrapper {
  display: grid;
  grid-template-rows: 5fr 1fr;
}
.textArea {
  height: 100%;
  min-height: 40vh;
  width: 100%;
  resize: none;
  outline: none;
  border-bottom: solid 1px;
}
.formBtnWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
