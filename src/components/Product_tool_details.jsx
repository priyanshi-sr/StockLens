import React from 'react';
import { useParams } from 'react-router-dom';

const Product_tool_details= () => {
    const { name2 } = useParams();

    return (
        <div className="mx-48 text-xl font-semibold font-mono text-blue-700 pt-1.5">
            <h1>{name2}</h1>
            <p>This page displays details for {name2}.</p>

        </div>
    );
};

export default Product_tool_details;
