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
          lineTension: 0.8,
        },
        {
          label: "دور",
          backgroundColor: "#3dda57",
          fill: true,
          borderColor: "#3dda57",
          pointRadius: 2,
          data: [0.97, 0.93, 0.97, 0.9, 0.9],
          lineTension: 0.8,
        },
        {
          label: "شقة",
          backgroundColor: "#a502ff",
          fill: true,
          borderColor: "#a502ff",
          pointRadius: 2,
          data: [],
          lineTension: 0.8,
        },

        {
          label: "المؤشر العام",
          backgroundColor: "#ffe804",
          fill: true,
          borderColor: "#ffe804",
          pointRadius: 2,
          data: [0.99, 0.96, 1, 0.95, 0.96],
          lineTension: 0.8,
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
            boxWidth: 12,
            font: {
              family: "dinar md",
            },
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
