import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ETFs_Card from "./ETFs_Card.jsx";

const MyComponent = () => {

    const pic = 'Picture11.png';
    return (
        <div className="mx-48 text-xl font-semibold font-mono text-blue-700 pt-9">
            <div className="flex justify-between items-center mb-3">
                <div>ETFs by StockLens</div>
            </div>

            <div className="flex overflow-x-hidden hover:overflow-x-auto space-x-4 pb-2">
                <Link to="/etf/Nifty_India_Defense">
                    <ETFs_Card>
                        <div className="flex space-x-2 flex-col items-center justify-center space-y-2">
                            <img src={pic} alt="pic" className="w-10 h-auto" />
                            <span className="text-center">StockLens Nifty India Defense ETF</span>
                        </div>
                    </ETFs_Card>
                </Link>
                <Link to="/etf/Zomato">
                    <ETFs_Card>
                        <div className="flex space-x-2 flex-col items-center justify-center space-y-2">
                            <img src={pic} alt="pic" className="w-10 h-auto" />
                            <span className="text-center">StockLens Liquid ETF</span>
                        </div>
                    </ETFs_Card>
                </Link>
              


            </div>
        </div>
    );
};

export default MyComponent;
