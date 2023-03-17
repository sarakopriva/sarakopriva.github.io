const ctx = document.getElementById("myChart1");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["1990-2000", "2000-2010", "2010-2015", "2015-2020"],
    datasets: [
      {
        label: "Forest expansion",
        data: [8, 10, 7, 5],
        borderWidth: 1,
        borderSkipped: false,
        borderColor: "rgb(64, 181, 178)",
        backgroundColor: "rgba(64, 181, 178, 0.5)",
      },
      {
        label: "Deforestation",
        data: [-16, -15, -12, -10],
        borderWidth: 1,
        borderSkipped: false,
        borderColor: "rgb(187, 189, 194)",
        backgroundColor: "rgba(187, 189, 194, 0.5)",
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Forest expansion¹ and deforestation² in million ha per year, 1990 - 2020 [1]",
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        // title: {
        //   display: true,
        //   text: "Million ha per year",
        // },
        suggestedMax: 15,
        suggestedMin: -20,
        grid: {
          display: false,
        },
      },
    },
  },
});
