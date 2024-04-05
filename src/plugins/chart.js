export const data = {
  labels: [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Loyal Customers",
      backgroundColor: "#A700FF",
      data: [240, 390, 210, 450, 390, 280, 410, 300, 100, 430, 270, 980],
    },
    {
      label: "New Customers",
      backgroundColor: "#EF4444",
      data: [340, 390, 110, 350, 320, 220, 210, 300, 200, 830, 970, 680],
    },
    {
      label: "Unique Customers",
      backgroundColor: "#3CD856",
      data: [440, 590, 310, 250, 120, 520, 710, 500, 200, 930, 970, 380],
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
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
