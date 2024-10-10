import React from 'react';
import {Link} from "react-router-dom";
import Top_Sectors_Card from "./Top_Sectors_Card.jsx";
const Top_Sectors = () => {

    const banking = 'Picture31.png';
    const energy = 'Picture32.png';
    const healthcare = 'Picture33.png';
    const media = 'Picture34.png';
    const auto = 'Picture36.png';
    const tele = 'Picture35.png';

    return (
        <div className="mx-48 text-xl font-semibold font-mono text-blue-700 pt-9">
            <div className="flex justify-between items-center mb-3">
                <div>Top Sectors</div>
                <Link to="/top_sectors/see_more" className="text-sm font-mono text-purple-600">See More</Link>

            </div>
            <div className="flex overflow-x-hidden hover:overflow-x-auto space-x-4 pb-2 ">
                <Link to="/top_sectors/Banking">
                    <Top_Sectors_Card>
                        <div className="flex space-x-2 flex-col items-center justify-center space-y-2">
                            <img src={banking} alt="banking" className="w-20 h-auto" />
                            <span className="text-center">Banking</span>
                        </div>
                    </Top_Sectors_Card>
                </Link>
                <Link to="/top_sectors/Energy">
                    <Top_Sectors_Card>
                        <div className="flex space-x-2 flex-col items-center justify-center space-y-2">
                            <img src={energy} alt="energy" className="w-20 h-auto" />
                            <span className="text-center">Energy</span>
                        </div>
                    </Top_Sectors_Card>
                </Link>
                <Link to="/top_sectors/Healthcare">
                    <Top_Sectors_Card>
                        <div className="flex space-x-2 flex-col items-center justify-center space-y-2">
                            <img src={healthcare} alt="healthcare" className="w-20 h-auto" />
                            <span className="text-center">Healthcare</span>
                        </div>
                    </Top_Sectors_Card>
                </Link>
                <Link to="/top_sectors/Media_&_Entertainment">
                    <Top_Sectors_Card>
                        <div className="flex space-x-2 flex-col items-center justify-center space-y-2">
                            <img src={media} alt="media" className="w-20 h-auto" />
                            <span className="text-center">Media & Entertainment</span>
                        </div>
                    </Top_Sectors_Card>
                </Link>
                <Link to="/top_sectors/Automobile">
                    <Top_Sectors_Card>
                        <div className="flex space-x-2 flex-col items-center justify-center space-y-2">
                            <img src={auto} alt="automobile" className="w-20 h-auto" />
                            <span className="text-center">Automobile</span>
                        </div>
                    </Top_Sectors_Card>
                </Link>
                <Link to="/top_sectors/Tele_communication">
                    <Top_Sectors_Card>
                        <div className="flex space-x-2 flex-col items-center justify-center space-y-2">
                            <img src={tele} alt="tele-comm" className="w-20 h-auto" />
                            <span className="text-center">Tele-Communication</span>
                        </div>
                    </Top_Sectors_Card>
                </Link>

            </div>
        </div>
    );
};

export default Top_Sectors;
