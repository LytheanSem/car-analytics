import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const getRandomColor = (index) => {
    const colors = [
        'rgba(255, 99, 132, 0.7)',    // Red
        'rgba(54, 162, 235, 0.7)',   // Blue
        'rgba(255, 206, 86, 0.7)',   // Yellow
        'rgba(75, 192, 192, 0.7)',   // Green
        'rgba(153, 102, 255, 0.7)',  // Purple
        'rgba(255, 159, 64, 0.7)',   // Orange
        'rgba(199, 199, 199, 0.7)',  // Grey
        'rgba(83, 102, 255, 0.7)',   // Indigo
        'rgba(255, 102, 205, 0.7)',  // Pink
        'rgba(102, 255, 99, 0.7)'    // Lime
    ];
    return colors[index % colors.length];
};

const BrandStackedBarChart = ({ data }) => {
    const brands = data.map((brand) => brand.Name);
    const models = [...new Set(data.flatMap((brand) => brand.models.map((model) => model.ModelName)))];

    const chartData = {
        labels: brands,
        datasets: models.map((modelName, index) => ({
            label: modelName,
            data: data.map((brand) => {
                const model = brand.models.find((m) => m.ModelName === modelName);
                return model ? model.count : 0;
            }),
            backgroundColor: getRandomColor(index),
        })),
    };

    const options = {
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    boxWidth: 20,
                },
            },
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default BrandStackedBarChart;
