<template lang="pug">
.section
  .loader(v-if="loading")
  .container(v-else)
    .card
      .card-header
        p.card-header-title
          | Rate Converter
      .card-content
        .field
          .control.is-large
            input.input.is-large(
              type="number"
              v-model="input"
              placeholder="EUR"
              @onfocus="this.focused = true"
              @onleave="this.focused = false"
              )
        .columns
          .column
            p MXN {{ MXN.MXN }}
            p 1 EUR = {{ MXN.EUR_1 }} MXN
            p 1 MXN = {{ MXN.MXN_1 }} EUR
          .column
            p AUD {{ AUD.AUD }}
            p 1 EUR = {{ AUD.EUR_1 }} AUD
            p 1 AUD = {{ AUD.AUD_1 }} EUR
          .column
            p HKD {{ HKD.HKD }}
            p 1 EUR = {{ HKD.EUR_1 }} HKD
            p 1 HKD = {{ HKD.HKD_1 }} EUR
      .card-footer
        p.card-footer-item
          | 2021 - Hugo Morales Demo
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      rates: null,
      input: 0,
      focused: false,
    };
  },
  computed: {
    MXN() {
      return {
        MXN: (this.rates.rates.MXN * this.input).toFixed(2),
        EUR_1: (this.rates.rates.MXN).toFixed(2),
        MXN_1: (1 / this.rates.rates.MXN).toFixed(2),
      };
    },
    AUD() {
      return {
        AUD: (this.rates.rates.AUD * this.input).toFixed(2),
        EUR_1: (this.rates.rates.AUD).toFixed(2),
        AUD_1: (1 / this.rates.rates.AUD).toFixed(2),
      };
    },
    HKD() {
      return {
        HKD: (this.rates.rates.HKD * this.input).toFixed(2),
        EUR_1: (this.rates.rates.HKD).toFixed(2),
        HKD_1: (1 / this.rates.rates.HKD).toFixed(2),
      };
    },
  },
  created() {
    this.getConversionRates();
  },
  methods: {
    async getConversionRates() {
      try {
        const { data: rates } = await this.$axios.get('https://api.ratesapi.io/api/latest');
        this.rates = rates;
        this.loading = false;
      } catch (e) {
        console.log('Could not get rates');
      }
    },
  },
};
</script>

<style>
</style>
