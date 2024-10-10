import React from 'react';

const ETFs_Card = (props) => {
    return (
        <div className="min-w-[180px]  rounded overflow-hidden shadow-lg border  border-gray-200  hover:scale-95">
            <div className="px-4 py-2">
                <div
                    className="font-bold  text-xl-end mb-2  text-center bg-[linear-gradient(90deg,_rgb(132,_204,_22),_rgb(34,_197,_94),_rgb(16,_185,_129))]
 text-transparent bg-clip-text pt-3 hover:bg-gradient-to-r from-purple-700 via-violet-400 to-indigo-600   ">
                    {props.children}


                </div>
            </div>
        </div>
    );
};

export default ETFs_Card ;