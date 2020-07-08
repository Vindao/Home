<template>
  <v-form @submit.prevent="submit" v-model="valid">
    <v-text-field
      :rules="validate('name')"
      v-model="formVals.name"
      :label="$t('Forms.name.label') + '*'"
      required
    ></v-text-field>
    <v-text-field
      v-model="formVals.email"
      :rules="validate('email')"
      :label="$t('Forms.email.label') + '*'"
      type="email"
      required
    ></v-text-field>
    <v-text-field
      v-model="formVals.company"
      :rules="validate('company')"
      :label="$t('Forms.company.label')"
      type="text"
      required
    ></v-text-field>
    <v-text-field
      v-model="formVals.phone"
      :rules="validate('phone')"
      :label="$t('Forms.phone.label')"
      type="phone"
      required
    ></v-text-field>
    <div class="formBtnWrapper">
      <v-btn x-large :disabled="!valid" color="secondary" class="primary--text" type="submit">{{
        $t('Forms.BTNS.next')
      }}</v-btn>
    </div>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';

import validate from '../../utils/formValidation';

export default Vue.extend({
  props: {
    setValues: Function,
    next: Function
  },
  data: () => ({
    formVals: {
      name: '',
      email: '',
      company: '',
      phone: ''
    },

    valid: false
  }),
  methods: {
    validate(type: string) {
      //@ts-ignore
      const val: string = this.formVals[type];
      const valid = validate(type, val);
      let toReturn: string[] = [];
      for (let error of valid) {
        toReturn.push(this.$t(`Forms.${type}.errors.${error}`));
      }
      return toReturn.length === 0 ? [true] : toReturn;
    },
    submit() {
      this.setValues(this.formVals);
      this.next();
    }
  }
});
</script>

<style lang="scss" scoped></style>
