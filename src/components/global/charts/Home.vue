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
  name: "HomeChart",
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Line },
  setup() {
    const data = {
      labels: ["2019", "2020", "2021", "2022", "2023"],
      datasets: [
        {
          label: "فلة",
          backgroundColor: "#ec4541",
          data: [1, 1, 1, 1, 1],
          fill: true,
          borderColor: "#ec4541",
          pointRadius: 2,
        },
        {
          label: "دور",
          backgroundColor: "#3dda57",
          fill: true,
          borderColor: "#3dda57",
          pointRadius: 2,
          data: [0.97, 0.96, 0.94, 0.9, 0.9],
        },
        {
          label: "شقة",
          backgroundColor: "#a502ff",
          fill: true,
          borderColor: "#a502ff",
          pointRadius: 2,
          data: [0.99, 0.98, 0.95, 0.93, 0.96],
        },

        {
          label: "المؤشر العام",
          backgroundColor: "#ffe804",
          fill: true,
          borderColor: "#ffe804",
          pointRadius: 2,
          data: [0.99, 0.96, 0.94, 0.95, 0.96],
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            usePointStyle: true,
          },
        },
      },
      //   drawActiveElementsOnTop: false,
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    };
    return { data, options };
  },
});
</script>
