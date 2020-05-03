<template>
  <v-card height="60vh">
    <v-container fluid fill-height>
      <v-row>
        <v-col class="col-12">
          <v-card-title width="100%" class="justify-center pb-0">
            Send us a message
          </v-card-title>
        </v-col>
      </v-row>

      <v-card-text class="pt-0">
        <v-form ref="form" v-model="valid" style="height: 100%; width: 100%;">
          <v-row v-show="start" style="height: 85%;">
            <v-col cols="12">
              <v-text-field
                :rules="validate('name')"
                v-model="formVals.name"
                :label="text.Forms.name.label + '*'"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="formVals.email"
                :rules="validate('email')"
                :label="text.Forms.email.label + '*'"
                type="email"
                required
              ></v-text-field>
            </v-col>
            <v-col class="col-12">
              <v-text-field
                v-model="formVals.company"
                :rules="validate('company')"
                :label="text.Forms.company.label"
                type="text"
                required
              ></v-text-field>
            </v-col>
            <v-col class="col-12">
              <v-text-field
                v-model="formVals.phone"
                :rules="validate('phone')"
                :label="text.Forms.phone.label"
                type="phone"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row v-show="!start" style="height: 85%;">
            <v-col class="col-12">
              <textarea
                placeholder="Your Message"
                v-model="formVals.message"
                style="
                  height: 100%;
                  width: 100%;
                  resize: none;
                  outline: none;
                  border-bottom: solid 1px;
                "
              >
              </textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="col-12 text-center">
              <v-btn large :disabled="!valid" color="secondary" text @click="start = !start">{{
                start ? text.Forms.BTNS.next : text.Forms.BTNS.back
              }}</v-btn>
              <v-btn
                large
                v-show="!start"
                background-color="primary"
                color="secondary"
                text
                @click="Submit"
                >{{ text.Forms.BTNS.send }}</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-container>
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

    valid: true,
    start: true
  }),
  computed: {
    ...mapGetters({ text: 'language/text' })
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
    Submit() {
      console.log(this.formVals);
    }
  }
});
</script>

<style lang="scss" scoped></style>
