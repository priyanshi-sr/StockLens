import React from 'react';
import { useParams } from 'react-router-dom';

const IndexDetails = () => {
    const { name } = useParams();

    return (
        <div className="mx-48 text-xl font-semibold font-mono text-blue-700 pt-1.5">
            <h1>{name}</h1>
            <p>This page displays details for {name}.</p>

        </div>
    );
};

export default IndexDetails;
