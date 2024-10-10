import React from 'react';
import { useParams } from 'react-router-dom';

const ETFs_Details= () => {
    const { name4 } = useParams();

    return (
        <div className="mx-48 text-xl font-semibold font-mono text-blue-700 pt-1.5">
            <h1>{name4}</h1>
            <p>This page displays details for {name4}.</p>

        </div>
    );
};

export default ETFs_Details;
