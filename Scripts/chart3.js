Chart.defaults.font.family = "Lato";

const values = [
  { continent: "Africa", category: { protected: 27, managed: 24 } },
  { continent: "Asia", category: { protected: 25, managed: 64 } },
  { continent: "Europe", category: { protected: 6, managed: 96 } },
  {
    continent: "North and Central America",
    category: { protected: 11, managed: 59 },
  },
  { continent: "Oceania", category: { protected: 16, managed: 31 } },
  { continent: "South America", category: { protected: 31, managed: 17 } },
  { continent: "World", category: { protected: 18, managed: 54 } },
];
const values2 = [
  { continent: "Africa", category: { protected: 73, managed: 76 } },
  { continent: "Asia", category: { protected: 75, managed: 36 } },
  { continent: "Europe", category: { protected: 94, managed: 4 } },
  {
    continent: "North and Central America",
    category: { protected: 89, managed: 41 },
  },
  { continent: "Oceania", category: { protected: 84, managed: 69 } },
  { continent: "South America", category: { protected: 69, managed: 83 } },
  { continent: "World", category: { protected: 82, managed: 46 } },
];

const title = "Proportion of forest in protected areas, by region, 2020 [1]";
const title2 =
  "Proportion of forest area with long-term management plans, by region, 2020 [1]";
// const title2 = `Proportion of forest area with long-term management plans, by region, 2020 <a href="https://google.com"> [1] </a>`;

// `<a href="https://google.com"> google </a>`

const arrayOfImages = [
  "Pictures/africa.png",
  "Pictures/asia.png",
  "Pictures/europe.png",
  "Pictures/namerica.png",
  "Pictures/oceania.png",
  "Pictures/samerica.png",
  "Pictures/world2.png",
  "Pictures/world.png",
];

const ctx3 = document.getElementById("myChart3");
let count = 0;

const protected = "% Protected";
const unprotected = "% Unprotected";
const managed = "% Managed";
const unmanaged = "% Unmanaged";

const myChart3 = new Chart(ctx3, {
  type: "bar",
  data: {
    // labels: [
    //   "Africa",
    //   "Asia",
    //   "Europe",
    //   "North and Central America",
    //   "Oceania",
    //   "South America",
    //   "World",
    // ],
    datasets: [
      {
        label: protected,
        data: values,
        borderWidth: 1,
        borderColor: "rgb(64, 181, 178)",
        backgroundColor: "rgba(64, 181, 178, 0.5)",
        parsing: {
          yAxisKey: "continent",
          xAxisKey: "category.protected",
        },
      },
      {
        label: unprotected,
        data: values2,
        borderWidth: 1,
        borderColor: "rgb(64, 181, 178)",
        backgroundColor: "rgba(64, 181, 178, 0.1)",
        parsing: {
          yAxisKey: "continent",
          xAxisKey: "category.protected",
        },
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: updateTitle(),
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        grid: {
          display: false,
        },
      },
      x: {
        stacked: true,
        // grid: {
        //   display: false,
        // },
        display: false,
      },
    },
    indexAxis: "y",
  },
});

const img = document.getElementById("img");

function mouseoverHandler(event) {
  // console.log(event);
  const points = myChart3.getElementsAtEventForMode(
    event,
    "nearest",
    {
      intersect: true,
    },
    true
  );
  if (points.length) {
    document.getElementById("img").src = arrayOfImages[points[0].index];
  }
}

function mouseleaveHandler(event) {
  document.getElementById("img").src = arrayOfImages[7];
}

myChart3.canvas.addEventListener("mousemove", mouseoverHandler);
myChart3.canvas.addEventListener("mouseleave", mouseleaveHandler);

// Check if user is on a mobile or tablet device
const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

if (isMobile) {
  // Detect touch events and apply hover effect on tap
  myChart3.canvas.addEventListener("touchstart", mouseoverHandler);
  // Remove hover effect when touch ends
  myChart3.canvas.addEventListener("touchend", mouseleaveHandler);
}

// CLICKHANDLER
// function clickHandler(click) {
//   const points = myChart3.getElementsAtEventForMode(
//     click,
//     "nearest",
//     {
//       intersect: true,
//     },
//     true
//   );
//   if (points.length) {
//     document.getElementById("img").src = arrayOfImages[points[0].index];
//   }
// }
// myChart3.canvas.onclick = clickHandler;
// CLICKHANDLER END

// function hoverHandler(hover) {
//   const points = myChart3.getElementsAtEventForMode(
//     hover,
//     "nearest",
//     {
//       intersect: true,
//     },
//     true
//   );
//   if (points.length) {
//     document.getElementById("img").src = arrayOfImages[points[0].index];
//   }
// }

// myChart3.canvas.onHover = hoverHandler;

function updateChart(option) {
  myChart3.data.datasets[0].parsing.xAxisKey = `category.${option}`;
  myChart3.data.datasets[1].parsing.xAxisKey = `category.${option}`;
  myChart3.options.plugins.title.text = updateTitle();
  // console.log(myChart3.options.plugins.title.text);
  myChart3.update();
}
function updateTitle() {
  if (count === 0) {
    count++;
    return "Proportion of forest in protected areas, by region, 2020 [1]";
  } else {
    if (myChart3.data.datasets[0].parsing.xAxisKey === "category.protected") {
      return title;
    } else {
      return title2;
    }
  }
}

const managedBtn = document.getElementById("managed");
managedBtn.addEventListener("click", updateTooltiManaged);

function updateTooltiManaged() {
  myChart3.data.datasets[0].label = managed;
  myChart3.data.datasets[1].label = unmanaged;
}

const activeBtn = document.getElementById("active-button");
activeBtn.addEventListener("click", updateTooltipProtected);

function updateTooltipProtected() {
  myChart3.data.datasets[0].label = protected;
  myChart3.data.datasets[1].label = unprotected;
}
