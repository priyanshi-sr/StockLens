import React from 'react';
import {Link} from "react-router-dom";
import IndexCard from "./IndexCard.jsx";


const Index = () => {
    return (

        <div className="mx-48 text-xl font-semibold font-mono text-blue-700 pt-1.5">
            <div className="flex justify-between items-center mb-3">
                <div>Index</div>
                <Link to="/index/all_indices" className="text-sm font-mono text-purple-600">All Indices</Link>
            </div>
            <div className="flex overflow-x-hidden hover:overflow-x-auto space-x-4 pb-2 ">
                <Link to="/stock/NIFTY 50"><IndexCard>NIFTY 50</IndexCard></Link>
                <Link to="/stock/SENSEX"><IndexCard>SENSEX</IndexCard></Link>
                <Link to="/stock/BANKNIFTY"><IndexCard>BANKNIFTY</IndexCard></Link>
                <Link to="/stock/FINNIFTY"><IndexCard>FINNIFTY</IndexCard></Link>
                <Link to="/stock/MIDCPNIFTY"><IndexCard>MIDCPNIFTY</IndexCard></Link>
                <Link to="/stock/BANKEX"><IndexCard>BANKEX</IndexCard></Link>
            </div>
        </div>
    );
};

export default Index;
