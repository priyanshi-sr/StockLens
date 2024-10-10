import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Top_Gainers_Card from "./Top_Gainers_Card.jsx";

const MyComponent = () => {
    const [activeTab, setActiveTab] = useState('Large');
    const mahindra = 'Picture27.png';
    const zomato = 'Picture28.png';
    const irfc = 'Picture20.png';
    const bajaj = 'Picture18.png';


    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="mx-48 text-xl font-semibold font-mono text-blue-700 pt-9">
            <div className="flex justify-between items-center mb-3">
                <div>Top Gainers</div>
                <Link to="/top_gainers/see_more" className="text-sm font-mono text-purple-600">See more</Link>
            </div>
            <div className="flex space-x-4 mb-3">
                {['Large', 'Mid', 'Small'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        className={`px-2 py-1 rounded-full text-sm font-mono ${activeTab === tab ? 'bg-teal-500 text-white' : 'border border-teal-500 text-teal-500'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="flex overflow-x-hidden hover:overflow-x-auto space-x-4 pb-2">
                <Link to="/top_gainers/Mahindra and Mahindra">
                    <Top_Gainers_Card>
                        <div className="flex space-x-2 flex-col items-center justify-center space-y-2">
                            <img src={mahindra} alt="mahindra" className="w-20 h-auto" />
                            <span className="text-center">Mahindra and Mahindra</span>
                        </div>
                    </Top_Gainers_Card>
                </Link>
                <Link to="/top_gainers/Zomato">
                    <Top_Gainers_Card>
                        <div className="flex space-x-2 flex-col items-center justify-center space-y-2">
                            <img src={zomato} alt="zomato" className="w-20 h-auto" />
                            <span className="text-center">Zomato</span>
                        </div>
                    </Top_Gainers_Card>
                </Link>
                <Link to="/top_gainers/IRFC">
                    <Top_Gainers_Card>
                        <div className="flex space-x-2 flex-col items-center justify-center space-y-2">
                            <img src={irfc} alt="irfc" className="w-20 h-11" />
                            <span className="text-center">IRFC</span>
                        </div>
                    </Top_Gainers_Card>
                </Link>
                <Link to="/top_gainers/Bajaj_Holdings">
                    <Top_Gainers_Card>
                        <div className="flex space-x-2 flex-col items-center justify-center space-y-2">
                            <img src={bajaj} alt="Bajaj holding" className="w-20 h-11" />
                            <span className="text-center">Bajaj Holdings</span>
                        </div>
                    </Top_Gainers_Card>
                </Link>

            </div>
        </div>
    );
};

export default MyComponent;
