import React from 'react';
import { Link } from "react-router-dom";
import Product_Tools_Card from "./Product_Tools_Card.jsx";

const Products_Tools= () => {
    const terminal = 'Picture22.png';
    const events = 'Picture23.png';
    const ipo = 'Picture24.png';
    const intraday = 'Picture25.png';
    const screener = 'Picture26.png';

    return (
        <div className="mx-48 text-xl font-semibold font-mono text-blue-700 pt-9">
            <div className="mb-3">
               Products & tools
            </div>
            <div className="flex overflow-x-hidden hover:overflow-x-auto space-x-4 pb-2">
                <Link to="/product_tool/Terminal">
                    <Product_Tools_Card>
                        <div className="flex  space-x-2  flex-col items-center justify-center space-y-2">
                            <img src={terminal} alt="Terminal" className="w-20 h-auto" />
                            <span className={"text-center"}>Terminal</span>
                        </div>
                    </Product_Tools_Card>
                </Link>
                <Link to="/product_tool/Events">
                    <Product_Tools_Card>
                        <div className="flex  space-x-2  flex-col items-center justify-center space-y-2">
                            <img src={events} alt="Events" className="w-20 h-auto" />
                            <span className={"text-center"}>Events</span>
                        </div>
                    </Product_Tools_Card>
                </Link>
                <Link to="/product_tool/IPO">
                    <Product_Tools_Card>
                        <div className="flex  space-x-2  flex-col items-center justify-center space-y-2">
                            <img src={ipo} alt="IPO" className="w-20 h-auto" />
                            <span className={"text-center"}>IPO</span>
                        </div>
                    </Product_Tools_Card>
                </Link>
                <Link to="/product_tool/Intraday">
                    <Product_Tools_Card>
                        <div className="flex  space-x-2  flex-col items-center justify-center space-y-2">
                            <img src={intraday} alt="Intraday" className="w-20 h-auto" />
                            <span className={"text-center"}>Intraday</span>
                        </div>
                    </Product_Tools_Card>
                </Link>
                <Link to="/product_tool/Screener">
                    <Product_Tools_Card>
                        <div className="flex  space-x-2  flex-col items-center justify-center space-y-2">
                            <img src={screener} alt="Screener" className="w-20 h-auto" />
                            <span className={"text-center"}>Screener</span>
                        </div>
                    </Product_Tools_Card>
                </Link>
            </div>
        </div>
    );
};

export default Products_Tools;
