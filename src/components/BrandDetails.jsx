import React, { useState } from 'react';
import carData from '../data/cars.json';

const BrandDetails = ({ brandId }) => {
    const [highlightedCars, setHighlightedCars] = useState(() => {
        return JSON.parse(localStorage.getItem('highlightedCars')) || [];
    });

    const toggleHighlight = (car) => {
        let updatedHighlights = [...highlightedCars, car];
        setHighlightedCars(updatedHighlights);
        localStorage.setItem('highlightedCars', JSON.stringify(updatedHighlights));
    };

    const removeHighlight = (carId) => {
        const updatedHighlights = highlightedCars.filter(car => car.Cid !== carId);
        setHighlightedCars(updatedHighlights);
        localStorage.setItem('highlightedCars', JSON.stringify(updatedHighlights));
    };

    const models = carData.Cars.filter(car => car.MkID === brandId);

    // Group cars by model
    const modelGroups = models.reduce((acc, car) => {
        if (!acc[car.Model]) {
            acc[car.Model] = [];
        }
        acc[car.Model].push(car);
        return acc;
    }, {});

    return (
        <div style={{ marginLeft: '20px' }}>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Name</th>
                        <th>Number of Cars</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Highlight</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(modelGroups).map(model => (
                        <tr key={model}>
                            <td>{model}</td>
                            <td>{modelGroups[model][0].NameMMT}</td>
                            <td>{modelGroups[model].length}</td>
                            <td>{modelGroups[model][0].Prc} {modelGroups[model][0].Currency}</td>
                            <td><img src={modelGroups[model][0].Img100} alt={modelGroups[model][0].NameMMT} /></td>
                            <td>
                                {highlightedCars.some((highlight) => highlight.Cid === modelGroups[model][0].Cid) ? (
                                    <button onClick={() => removeHighlight(modelGroups[model][0].Cid)}>
                                        {'⭐'}
                                    </button>
                                ) : (
                                    <button onClick={() => toggleHighlight(modelGroups[model][0])}>
                                        {'☆'}
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BrandDetails;
