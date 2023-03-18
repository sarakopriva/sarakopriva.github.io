const ctx2 = document.getElementById("myChart2");

new Chart(ctx2, {
  type: "bar",
  data: {
    labels: [
      // "Not stressed at all",
      "Self-reported Stress Levels³", // "Včasih pod stresom",
      // "Chronically stressed", // Kronično pod stresom
    ],
    datasets: [
      {
        label: "Forest Day",
        data: [30],
        borderWidth: 1,
        borderColor: "rgb(64, 181, 178)",
        backgroundColor: "rgba(64, 181, 178, 0.5)",
      },
      {
        label: "Control Day",
        data: [37],
        borderWidth: 1,
        borderColor: "rgb(187, 189, 194)",
        backgroundColor: "rgba(187, 189, 194, 0.1)",
      },
      // {
      //   label: "Difference",
      //   data: [5, 7, 10],
      //   borderWidth: 1,
      //   borderColor: "rgb(45, 142, 229)",
      //   backgroundColor: "rgba(45, 142, 229, 0.5)",
      // },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "When people go to forest, they feel more relaxed [2]",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        // title: {
        //   display: true,
        //   text: "Self-reported stress levels",
        // },
        suggestedMax: 12,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
});
