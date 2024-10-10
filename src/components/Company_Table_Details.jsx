import React from 'react';
import {useParams} from "react-router-dom";

const MyComponent = () => {
    const { name9 } = useParams();

    return (
        <div className="mx-48 text-xl font-semibold font-mono text-blue-700 pt-1.5">
            <h1>{name9}</h1>
            <p>This page displays details for {name9}.</p>

        </div>
    );
};

export default MyComponent;
