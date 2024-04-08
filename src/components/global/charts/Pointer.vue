<template>
  <Line :data="data" :options="options" />
</template>

<script>
import { defineComponent } from "vue";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default defineComponent({
  name: "PointerChart",
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Line },
  setup() {
    const data = {
      labels: ["", "", "", "", "", "", "", "", "", ""],
      datasets: [
        {
          label: "$",
          backgroundColor: "#00DEA3",
          fill: true,
          borderColor: "#00DEA3",
          pointRadius: 2,
          data: [30, 20, 10, 0, 10, 20, 30, 20, 10, 0],
        },
        {
          label: "$",
          backgroundColor: "#5A55D2",
          fill: true,
          borderColor: "#5A55D2",
          pointRadius: 2,
          data: [60, 50, 40, 35, 40, 50, 60, 50, 40, 35],
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      //   drawActiveElementsOnTop: false,
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    };
    return { data, options };
  },
});
</script>
