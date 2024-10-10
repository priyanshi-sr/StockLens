import React from 'react';
import { useParams } from 'react-router-dom';

const The_Bull_Bulletin_Details= () => {
    const { name6 } = useParams();

    return (
        <div className="mx-48 text-xl font-semibold font-mono text-blue-700 pt-1.5">
            <h1>{name6}</h1>
            <p>This page displays details for {name6}.</p>

        </div>
    );
};

export default The_Bull_Bulletin_Details;
