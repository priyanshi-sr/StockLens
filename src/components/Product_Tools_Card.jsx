import React from 'react';

const Product_Tools_Card = (props) => {
    return (
        <div className="min-w-[210px] min-h-[148px] rounded overflow-hidden shadow-lg border  border-gray-200 hover:scale-95">
            <div className="px-4 py-2">
                <div
                    className="font-bold  text-xl mb-2 mt-7 text-center bg-[linear-gradient(45deg,_rgb(31,_41,_55),_rgb(29,_78,_216),_rgb(17,_24,_39))]
 text-transparent bg-clip-text pt-3 hover:bg-gradient-to-r from-teal-400 to-gray-800   ">
                    {props.children}

                </div>
            </div>
        </div>
    );
};

export default Product_Tools_Card ;