<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  computed: {
    data() {
      return this.chartdata;
    },
  },
  watch: {
    data() {
      this.renderChart(this.data, this.options);
    },
  },
  props: ['chartdata', 'options'],
  mounted() {
    this.renderChart(this.data, this.options);
  },
};
</script>
