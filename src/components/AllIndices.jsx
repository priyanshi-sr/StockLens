import React from 'react';
import { useParams } from 'react-router-dom';

const  AllIndices= () => {
    const { name0 } = useParams();

    return (
        <div className="mx-48 text-xl font-semibold font-mono text-blue-700 pt-1.5">
            <h1>{name0}</h1>
            <p>This page displays details for {name0}.</p>

        </div>
    );
};

export default AllIndices;
