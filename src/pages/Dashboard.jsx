import React, { useEffect, useState } from 'react';
import BrandList from '../components/BrandList';
import BrandPieChart from '../components/BrandPieChart';
import BrandStackedBarChart from '../components/BrandStackedBarChart';
import carData from '../data/cars.json';

const Dashboard = () => {
    const [brandData, setBrandData] = useState([]);

    useEffect(() => {
        const brands = carData.MMList.map((brand) => {
            const models = carData.Cars.filter((car) => car.MkID === brand.mkID);
            return {
                Name: brand.Name,
                count: models.length,
                models: models.map((model) => ({
                    ModelName: model.Model,
                    count: models.filter((m) => m.Model === model.Model).length,
                })),
            };
        });
        setBrandData(brands);
    }, []);

    return (
        <div className="dashboard-container">
            <div className="brand-list">
                <BrandList />
            </div>
            <div className="charts-container">
                <div className="chart">
                    <h2>Car Brands Pie Chart</h2>
                    <BrandPieChart data={brandData} />
                </div>
                <div className="chart">
                    <h2>Car Models Stacked Bar Chart</h2>
                    <BrandStackedBarChart data={brandData} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
