import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { nameCountries } = useParams();
    return (
        <div>
            <h1>This is countries:{nameCountries}</h1>
        </div>
    );
};

export default CountryDetails;