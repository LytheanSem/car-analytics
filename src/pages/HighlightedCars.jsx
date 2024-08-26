import React, { useState, useEffect } from 'react';
import './HighlightedCars.css'; // Add this line to import the CSS file

const HighlightedCars = () => {
    const [highlightedCars, setHighlightedCars] = useState(() => {
        return JSON.parse(localStorage.getItem('highlightedCars')) || [];
    });
    const [selectedCars, setSelectedCars] = useState([]);


    const removeHighlight = (carId) => {
        const updatedHighlights = highlightedCars.filter(car => car.Cid !== carId);
        setHighlightedCars(updatedHighlights);
        setSelectedCars(selectedCars.filter(id => id !== carId));
        localStorage.setItem('highlightedCars', JSON.stringify(updatedHighlights));
    };

    useEffect(() => {
        // Update localStorage when highlightedCars changes
        localStorage.setItem('highlightedCars', JSON.stringify(highlightedCars));
    }, [highlightedCars]);

    return (
        <div className="highlighted-cars-container">
            <h1>Highlighted Cars</h1>
            <ul className="highlighted-cars-list">
                {highlightedCars.map((car) => (
                    <li key={`${car.ID}-${car.NameMMT}`} className="highlighted-car-item">
                        <div className="car-info">
                            <span>{car.NameMMT} - {car.Prc} {car.Currency}</span>
                            <img src={car.Img100} alt={car.NameMMT} className="car-image" />
                        </div>
                        <button onClick={() => removeHighlight(car.Cid)} className="remove-button">Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HighlightedCars;
