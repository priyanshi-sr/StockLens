import React from 'react';
import { Link } from 'react-router-dom';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const CompanyTable = () => {
    const companyData = [
        { name: "SBI", price: 2749.20, change: -45.50, percent: -1.63, color: "red", trend: [5, 10, 5, 20, 8, 15] },
        { name: "TCS", price: 4252.95, change: -0.30, percent: -0.01, color: "red", trend: [8, 9, 10, 7, 6, 5] },
        { name: "HDFC Bank", price: 1633.15, change: -17.90, percent: -1.08, color: "red", trend: [10, 8, 9, 5, 6, 3] },
        { name: "Bharti Airtel", price: 1678.10, change: 20.65, percent: 1.25, color: "green", trend: [5, 10, 15, 12, 13, 20] },
        { name: "ICICI Bank", price: 1244.15, change: 7.55, percent: 0.61, color: "green", trend: [3, 4, 8, 10, 12, 15] },
        { name: "Infosys", price: 1952.75, change: 4.20, percent: 0.22, color: "green", trend: [7, 9, 8, 10, 9, 11] }
    ];

    return (
        <div className="mx-48 text-xl font-semibold font-mono text-blue-700 pt-9">
            <div className="flex justify-between items-center mb-3">
                <div>Top Companies</div>
                <Link to="/companies/see_more" className="text-sm font-mono text-purple-600">See More</Link>
            </div>
            <div className="table-auto w-full">
                <div className="grid grid-cols-5 gap-14 pb-2 text-purple-500 pt-3">

                    <div className="font-semibold">Company</div>
                    <div className="font-semibold">Market Price</div>
                    <div className="font-semibold">Change</div>
                    <div className="font-semibold">Trend</div>
                    <div className="font-semibold">Watchlist</div>
                </div>


                {companyData.map((company, index) => (
                    <div key={index} className="grid grid-cols-5 gap-4 border p-4 rounded-lg shadow-md mb-2">

                        <Link to={`/companies/${company.name.replace(/\s+/g, '_')}`} className="flex items-center">
                            <span className="text-center">{company.name}</span>
                        </Link>


                        <div className="flex items-center">
                            &#8377;{company.price.toFixed(2)}
                        </div>


                        <div
                            className={`flex items-center ${company.color === 'green' ? 'text-green-500' : 'text-red-500'}`}>
                            {company.change} ({company.percent}%)
                        </div>


                        <div className="flex items-center">
                            <Sparklines data={company.trend} width={100} height={20}>
                                <SparklinesLine color={company.color === 'green' ? "green" : "red"}/>
                            </Sparklines>
                        </div>

                        <div className="flex items-center justify-center">
                            <button className="text-green-500 text-xl">+</button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompanyTable;
