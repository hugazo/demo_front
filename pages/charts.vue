<template lang="pug">
.section
  .loader(v-if="loading")
  .container(v-else)
    .card
      .card-header
        .field
          p.card-header-title
            | Chart
      .card-content
        .field
          label.label EUR TO:
          .control
            .select
              select(v-model="selected_currency")
                option(selected="selected" disabled value="false")
                  | Select...
                option(v-for="currency in currencies")
                  | {{ currency }}
        .field
          p(v-if="!selected_currency")
            | Please select a currency
          .level(v-else)
            .level-item.fix-height
              Chart(
                :chartdata="chartdata"
                :options="chartoptions"
                )
      .card-footer
        p.card-footer-item
          | 2021 - Hugo Morales Demo
</template>

<script>
import Chart from '@/components/chart';

export default {
  components: {
    Chart,
  },
  data() {
    return {
      loading: true,
      selected_currency: false,
      conversions: [],
      dates: [],
      chartoptions: {},
    };
  },
  computed: {
    currencies() {
      return Object.keys(this.conversions[0].rates);
    },
    chartdata() {
      if (!this.selected_currency) return false;
      const values = this.conversions.map((value) => {
        const rate = value.rates[this.selected_currency];
        return rate;
      });
      // const values = this.conversions.map((value) => {
      //   const { date } = value;
      //   const rate = value.rates[this.selected_currency];
      //   return {
      //     [date]: [rate][0],
      //   };
      // });
      const chartdata = {
        labels: this.dates,
        datasets: [{
          label: `EUR TO ${this.selected_currency}`,
          data: values,
        }],
      };
      return chartdata;
    },
  },
  created() {
    this.getLastWeekConversions();
  },
  methods: {
    async getLastWeekConversions() {
      const today = new Date();
      const dates = [];
      for (let i = 0; i < 7; i++) {
        const reference = today.getDate();
        today.setDate(reference - 1);
        const date = today.toISOString().split('T')[0];
        dates.push(date);
      }
      const data = await Promise.all(dates.map(async (date) => {
        const { data: rates } = await this.$axios.get(`https://api.ratesapi.io/api/${date}`);
        return rates;
      }));
      this.dates = dates;
      this.conversions = data;
      this.loading = false;
    },
  },
};
</script>

<styles>
  .fix-height {
    height: 600px;
    width: 100%;
  }
</styles>
