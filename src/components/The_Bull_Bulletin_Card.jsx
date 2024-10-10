import React from 'react';

const The_Bull_Bulletin_Card = (props) => {
    return (
        <div className="min-w-[255px]  rounded overflow-hidden shadow-lg border  border-gray-200  hover:scale-95">
            <div className="px-4 py-2">
                <div
                    className="font-bold  text-xl mb-2  text-center  bg-[linear-gradient(60deg,_rgb(255,_0,_0),_rgb(255,_85,_85),_rgb(255,_170,_170))] text-transparent bg-clip-text pt-3 hover:bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900   ">
                    {props.children}


                </div>
            </div>
        </div>
    );
};

export default The_Bull_Bulletin_Card ;