import React from 'react';
import { useParams } from 'react-router-dom';

const Most_bought_details= () => {
    const { name1 } = useParams();

    return (
        <div className="mx-48 text-xl font-semibold font-mono text-blue-700 pt-1.5">
            <h1>{name1}</h1>
            <p>This page displays details for {name1}.</p>

        </div>
    );
};

export default Most_bought_details;
