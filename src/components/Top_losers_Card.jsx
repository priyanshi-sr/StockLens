import React from 'react';

const Top_losers_Card = (props) => {
    return (
        <div className="min-w-[255px]  rounded overflow-hidden shadow-lg border  border-gray-200  hover:scale-95">
            <div className="px-4 py-2">
                <div
                    className="font-bold  text-xl mb-2  text-center  bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))] text-transparent bg-clip-text pt-3 hover:bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400   ">
                    {props.children}


                </div>
            </div>
        </div>
    );
};

export default Top_losers_Card ;