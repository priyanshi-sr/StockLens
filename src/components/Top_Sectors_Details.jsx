import React from 'react';
import { useParams } from 'react-router-dom';

const Top_Sectors_Details = () => {
    const { name8 } = useParams();

    return (
        <div className="mx-48 text-xl font-semibold font-mono text-blue-700 pt-1.5">
            <h1>{name8}</h1>
            <p>This page displays details for {name8}.</p>

        </div>
    );
};

export default Top_Sectors_Details;
