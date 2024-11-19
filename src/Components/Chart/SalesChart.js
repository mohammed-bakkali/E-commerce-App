import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const SalesChart = ({ totalPaidSales, results, customerCount, monthlySalesData = [] }) => {

  const barData = {
    labels: ["Total Sales Paid", "Number of Orders", "Number of Customers"],
    datasets: [
      {
        label: "Statistics",
        data: [totalPaidSales, results, customerCount],
        backgroundColor: ["#4CAF50", "#FFC107", "#FF5722"],
        borderRadius: 5,
        borderWidth: 1,
      },
    ],
  };


  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Sales Overview", font: { size: 14 }, color: "#333" },
    },
    scales: {
      y: { beginAtZero: true, ticks: { color: "#555" }, grid: { color: "#ddd" } },
      x: { ticks: { color: "#555" }, grid: { color: "transparent" } },
    },
  };


  const lineData = {
    labels: monthlySalesData.map((item) => item.month),
    datasets: [
      {
        label: "Monthly Sales",
        data: monthlySalesData.map((item) => item.sales),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#3b82f6",
        pointRadius: 3,
      },
    ],
  };


  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Monthly Sales Trend", font: { size: 14 }, color: "#333" },
    },
    scales: {
      y: { beginAtZero: true, ticks: { color: "#555" }, grid: { color: "#ddd" } },
      x: { ticks: { color: "#555" }, grid: { color: "transparent" } },
    },
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", marginBottom: "40px"}}>
      <div style={{ flex: 1, maxWidth: "49%", background: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <Bar data={barData} options={barOptions} />
      </div>
      <div style={{ flex: 1, maxWidth: "49%", background: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <Line data={lineData} options={lineOptions} />
      </div>
    </div>
  );
};

export default SalesChart;
