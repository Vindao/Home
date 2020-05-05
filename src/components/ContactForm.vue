<template>
  <v-card>
    <v-form @submit="nextStep" v-model="valid">
      <div class="stepWrapper">
        <v-stepper v-model="step" class="elevation-0" style="min-height: 40vh">
          <v-stepper-header>
            <v-stepper-step key="1" :complete="step > 1" step="1" editable>
              General information
            </v-stepper-step>

            <v-divider />
            <v-stepper-step key="2" :complete="false" step="2">
              Send a message
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
              <textarea placeholder="Your Message" v-model="formVals.message" class="textArea" />
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
        <div class="formBtnWrapper pb-6">
          <v-btn
            x-large
            :disabled="!valid"
            color="secondary"
            class="primary--text "
            type="submit"
            >{{ text.Forms.BTNS.next }}</v-btn
          >
        </div>
      </div>
    </v-form>
    <!-- <v-stepper v-model="step" class="elevation-0">
      <v-stepper-header>
        <v-stepper-step key="1" :complete="step > 1" step="1" editable>
          General information
        </v-stepper-step>

        <v-divider />
        <v-stepper-step key="2" :complete="false" step="2">
          Send a message
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
         
              <textarea placeholder="Your Message" v-model="formVals.message" class="textArea">
              </textarea>

              <div class="formBtnWrapper">
                <v-btn
                  x-large
                  :disabled="formVals.message.length < 10"
                  color="secondary"
                  class="primary--text mt-4"
                  type="submit"
                  >{{ text.Forms.BTNS.send }}</v-btn
                >
              </div>
         
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper> -->
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import validate from '../utils/formValidation';
export default Vue.extend({
  props: ['toggle'],
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
    start: true
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
    nextStep(e: any) {
      e.preventDefault();
      this.step = 2;
    },
    submit(e: any) {
      e.preventDefault();
      console.log(this.formVals);
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
