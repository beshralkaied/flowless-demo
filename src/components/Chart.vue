<template>
  <canvas id="myChart" width="800" height="380"></canvas>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from "vue";
import Chart, {
  ChartConfiguration,
  ChartDataset,
  ChartType,
  ChartTypeRegistry,
} from "chart.js/auto";

export default defineComponent({
  props: {
    labels: Array,
    datasetsType: { type: String as PropType<ChartType>, required: true },
    datasetsLable: String,
    datasetsData: { type: Array },
    datasetsBorderColor: String,
    datasetsTension: Number,
    datasetsBackgroundColor: String,
    datasetsType2: String,
    datasetsLable2: String,
    datasetsData2: Array,
    datasetsBorderColor2: String,
    datasetsTension2: Number,
    datasetsBackgroundColor2: String,
    datasets: { type: Array as PropType<ChartDataset[]>, required: true },
  },
  setup(props) {
    function init() {
      const ctx = document.getElementById("myChart") as HTMLCanvasElement;
      const myChart = new Chart(ctx, {
        type: "scatter",
        data: {
          labels: props.labels,
          datasets: props.datasets,
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
    onMounted(init);
  },
});
</script>

<style scoped>
</style>