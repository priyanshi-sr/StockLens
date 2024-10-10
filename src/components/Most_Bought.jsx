import React from 'react';
import { Link } from "react-router-dom";
import Most_bought_Card from "./Most_bought_Card.jsx";

const MyComponent = () => {
    const bajajImage = 'Picture18.png';
    const ramaSteel = 'Picture19.png';
    const irfc = 'Picture20.png';
    const ola = 'Picture21.png';

    return (
        <div className="mx-48 text-xl font-semibold font-mono text-blue-700 pt-9">
            <div className="mb-3">
                Most Bought on StockLens
            </div>
            <div className="flex overflow-x-hidden hover:overflow-x-auto space-x-4 pb-2">
                <Link to="/most_bought/Bajaj Housing Finance">
                    <Most_bought_Card>
                        <div className="flex items-center space-x-2">
                            <img src={bajajImage} alt="Bajaj Housing Finance" className="w-7 h-7" />
                            <span>Bajaj Finance</span>
                        </div>
                    </Most_bought_Card>
                </Link>
                <Link to="/most_bought/Rama Steel Tubes">
                    <Most_bought_Card>
                        <div className="flex items-center space-x-2">
                            <img src={ramaSteel} alt="RamaSteel" className="w-11 h-7 " />
                            <span>Rama Steel Tubes</span>
                        </div>
                    </Most_bought_Card>
                </Link>
                <Link to="/most_bought/IRFC">
                    <Most_bought_Card>
                        <div className="flex items-center space-x-2 ">
                            <img src={irfc} alt="irfc" className="w-9 h-7 " />
                            <span>IRFC</span>
                        </div>
                    </Most_bought_Card>
                </Link>
                <Link to="/most_bought/ola electric">
                    <Most_bought_Card>
                        <div className="flex items-center space-x-2 ">
                            <img src={ola} alt="ola" className="w-7 h-7" />
                            <span>OLA Electric</span>
                        </div>
                    </Most_bought_Card>
                </Link>
            </div>
        </div>
    );
};

export default MyComponent;
