import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const BrandPieChart = ({ data }) => {
    const brandNames = data.map((brand) => brand.Name);
    const carCounts = data.map((brand) => brand.count);
    const colors = [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
        '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'
    ];

    const chartData = {
        labels: brandNames,
        datasets: [
            {
                data: carCounts,
                backgroundColor: colors,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 20,
                    padding: 20,
                },
            },
        },
    };

    return <Pie data={chartData} options={options} />;
};

export default BrandPieChart;
