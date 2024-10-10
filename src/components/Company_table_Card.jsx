import React from 'react';

const Company_Card = ({ children }) => {
    return (
        <div className="border rounded-lg shadow-md p-4 w-40 flex-shrink-0">
            {children}
        </div>
    );
};

export default Company_Card;
