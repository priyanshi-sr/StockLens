import React from 'react';
import { Link } from "react-router-dom";
import The_Bull_Bulletin_Card from "./The_Bull_Bulletin_Card.jsx";

const The_Bull_Bulletin = () => {

    const mahindra = 'Picture27.png';
    const zomato = 'Picture28.png';
    const irfc = 'Picture20.png';
    const bajaj = 'Picture18.png';
    const newsIcon = 'Picture30.png';

    return (
        <div className="mx-48 text-xl font-semibold font-mono text-blue-700 pt-5">
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center space-x-3">

                    <div>The Bull Bulletin</div>
                </div>
                <Link to="/the_bull_bulletin/news" className="text-sm font-mono text-white bg-purple-700 hover:bg-red-800 px-4 py-2 rounded-full ">
                    News
                    <img src={newsIcon} alt="news icon" className="w-8 h-8"/>

                </Link>
            </div>
            <div className="flex overflow-x-hidden hover:overflow-x-auto space-x-4 pb-2">
                <Link to="/the_bull_bulletin/Mahindra and Mahindra">
                    <The_Bull_Bulletin_Card>
                        <div className="flex space-x-2 flex-col items-center justify-center space-y-2">
                            <img src={mahindra} alt="mahindra" className="w-20 h-auto" />
                            <span className="text-center">Mahindra and Mahindra</span>
                        </div>
                    </The_Bull_Bulletin_Card>
                </Link>
                <Link to="/the_bull_bulletin/Zomato">
                    <The_Bull_Bulletin_Card>
                        <div className="flex space-x-2 flex-col items-center justify-center space-y-2">
                            <img src={zomato} alt="zomato" className="w-20 h-auto" />
                            <span className="text-center">Zomato</span>
                        </div>
                    </The_Bull_Bulletin_Card>
                </Link>
                <Link to="/the_bull_bulletin/IRFC">
                    <The_Bull_Bulletin_Card>
                        <div className="flex space-x-2 flex-col items-center justify-center space-y-2">
                            <img src={irfc} alt="irfc" className="w-20 h-11" />
                            <span className="text-center">IRFC</span>
                        </div>
                    </The_Bull_Bulletin_Card>
                </Link>
                <Link to="/the_bull_bulletin/Bajaj_Holdings">
                    <The_Bull_Bulletin_Card>
                        <div className="flex space-x-2 flex-col items-center justify-center space-y-2">
                            <img src={bajaj} alt="Bajaj holding" className="w-20 h-11" />
                            <span className="text-center">Bajaj Holdings</span>
                        </div>
                    </The_Bull_Bulletin_Card>
                </Link>
            </div>
        </div>
    );
};

export default The_Bull_Bulletin;
