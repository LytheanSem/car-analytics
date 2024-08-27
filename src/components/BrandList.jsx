import React, { useState } from 'react';
import BrandDetails from './BrandDetails';
import carData from '../data/cars.json';

const BrandList = () => {
    const [selectedBrand, setSelectedBrand] = useState(null);

    const handleBrandClick = (brandId) => {
        setSelectedBrand(brandId === selectedBrand ? null : brandId);
    };

    const calculateTotalPrice = (brandId) => {
        const carsOfBrand = carData.Cars.filter(car => car.MkID === brandId);
        return carsOfBrand.reduce((total, car) => total + parseInt(car.Prc.replace(/,/g, ''), 10), 0);
    };

    return (
        <div>
            <h2>Car_Brands</h2>
            <ul>
                {carData.MMList.map(brand => (
                    <li key={brand.mkID} onClick={() => handleBrandClick(brand.mkID)}>
                        {brand.Name} - Total Price: {calculateTotalPrice(brand.mkID).toLocaleString()} {carData.Cars[0].Currency}
                        {selectedBrand === brand.mkID && (
                            <BrandDetails brandId={brand.mkID} />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrandList;
