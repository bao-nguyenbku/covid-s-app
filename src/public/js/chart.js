const ctx1 = document.getElementById('support-chart').getContext('2d');
var gradientStroke1 = ctx1.createLinearGradient(0, 230, 0, 50);

gradientStroke1.addColorStop(1, 'rgba(203,12,159,0.2)');
gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
gradientStroke1.addColorStop(0, 'rgba(203,12,159,0)'); //purple colors

var gradientStroke2 = ctx1.createLinearGradient(0, 230, 0, 50);

gradientStroke2.addColorStop(1, 'rgba(20,23,39,0.2)');
gradientStroke2.addColorStop(0.2, 'rgba(72,72,176,0.0)');
gradientStroke2.addColorStop(0, 'rgba(20,23,39,0)'); //purple colors

new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        label: "Đã gửi",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        borderColor: "#DA007A",
        borderWidth: 0,
        backgroundColor: "#DA007A",
        fill: true,
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
        maxBarThickness: 20

      },
      {
        label: "Chờ giao hàng",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        borderColor: "none",
        borderWidth: 0,
        backgroundColor: "#DAA500",
        fill: true,
        data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
        maxBarThickness: 20
      },
      {
        label: "Hoàn thành",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        borderColor: "#39DA00",
        borderWidth: 0,
        backgroundColor: '#39DA00',
        fill: true,
        data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
        maxBarThickness: 20
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5]
        },
        ticks: {
          display: true,
          padding: 10,
          color: '#b2b9bf',
          font: {
            size: 16,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
          },
        }
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
          borderDash: [5, 5]
        },
        ticks: {
          display: true,
          color: '#b2b9bf',
          padding: 20,
          font: {
            size: 16,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
          },
        }
      },
    },
  },
});
const ctx2 = document.getElementById('support-done-chart').getContext('2d');

new Chart(ctx2, {
  type: "pie",
  data: {
    labels: ["Đã hoàn thành", "Tiếp nhận", "Đã gửi"],
    datasets: [{
        // tension: 0.4,
        // borderWidth: 0,
        // pointRadius: 0,
        // borderColor: "#DA007A",
        // borderWidth: 0,
        backgroundColor: "#DA007A",
        fill: true,
        data: [24, 10, 66]
      },
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5]
        },
        ticks: {
          display: true,
          padding: 10,
          color: '#b2b9bf',
          font: {
            size: 16,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
          },
        }
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
          borderDash: [5, 5]
        },
        ticks: {
          display: true,
          color: '#b2b9bf',
          padding: 20,
          font: {
            size: 16,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
          },
        }
      },
    },
  },
});

// const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Đã gửi', 'Chờ giao hàng', 'Hoàn thành'],
//         datasets: [{
//             label: 'Trạng thái yêu cầu tiếp tế',
//             data: [12, 19, 3],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 206, 86)',
//                 // 'rgba(75, 192, 192, 0.2)',
//                 // 'rgba(153, 102, 255, 0.2)',
//                 // 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 // 'rgba(75, 192, 192, 1)',
//                 // 'rgba(153, 102, 255, 1)',
//                 // 'rgba(255, 159, 64, 1)'
//             ],
//             hoverOffset: 4,
//             borderWidth: 1
//         }]
//     },
//     responsive: true,
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         },
//         responsive: true,
//         maintainAspectRatio: true
//     }
// });
