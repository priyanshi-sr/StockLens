import React from 'react';
import { useParams } from 'react-router-dom';

const Top_Losers_Details= () => {
    const { name7 } = useParams();

    return (
        <div className="mx-48 text-xl font-semibold font-mono text-blue-700 pt-1.5">
            <h1>{name7}</h1>
            <p>This page displays details for {name7}.</p>

        </div>
    );
};

export default Top_Losers_Details;
