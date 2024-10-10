import React from 'react';

const IndexCard = (props) => {
    return (
        <div className="min-w-[200px] rounded overflow-hidden shadow-lg">
            <div className="px-4 py-2">
                <div
                    className="font-bold  text-xl mb-2  text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 hover:from-purple-500 hover:to-blue-500  text-transparent bg-clip-text pt-3 ">
                    {props.children}

                </div>
            </div>
        </div>
    );
};

export default IndexCard;
