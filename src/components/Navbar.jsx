import React, {useEffect, useState} from 'react';
import theme from "tailwindcss/defaultTheme.js";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (

        <nav className='flex mx-32 p-8 '>
            <img src={"/Picture11.png"} alt="logo" className={'h-12 w-12 rounded-full'}/>
            <div className="logo">
                <span className='font-bold text-2xl mx-4 '>StockLens</span>
            </div>
            <ul className="gap-1 mx-3 p-1.5 pt-1">
                <li className='cursor-pointer hover:font-bold transition-all text-lg text-purple-600'>Explore</li>
            </ul>
            <ul className="gap-1 mx-3 p-1.5 pt-1">
                <li className='cursor-pointer hover:font-bold transition-all text-lg text-purple-600'>Nestopia</li>
            </ul>



            <div className="relative flex items-center mx-80">
                <input
                    type="text"
                    className="border border-gray-300 w-96 py-1.5 px-4 rounded-md pl-10"
                    placeholder="What are you looking for today?"
                />
                <img
                    src="/Picture4.png"
                    alt="Search icon"
                    className="absolute left-3 w-6 h-6 cursor-pointer"
                />

                <button className="ml-2">
                    <img
                        src="/Picture5.png"
                        alt="Notification icon"
                        className={'w-7 h-7 mx-8 cursor-pointer'}
                    />
                </button>

                <button className="ml-2">
                    <img
                        src="/Picture6.png"
                        alt="Notification icon"
                        className={'w-7 h-7 mx-3 cursor-pointer'}
                    />
                </button>

                <button className="ml-2">
                    <img
                        src="/Picture7.png"
                        alt="Notification icon"
                        className={'w-7 h-7 mx-3 cursor-pointer'}
                    />
                </button>

                {/* Account Icon with Dropdown */}
                <div className="relative">
                    <button onClick={toggleDropdown} className="ml-2">
                        <img
                            src="/Picture8.png"
                            alt="Account icon"
                            className={'w-11 h-11 mx-5 cursor-pointer'}
                        />
                    </button>

                    {dropdownOpen && (
                        <div
                            className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                            <ul className="py-1">
                                <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer hover:font-bold transition-all text-sm">
                                    <img className="h-6 w-6 mr-3" src="/Picture12.png" alt="order"/>
                                    All Orders
                                </li>
                                <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer hover:font-bold transition-all text-sm">
                                    <img className="h-6 w-6 mr-3 " src="/Picture13.png" alt="Customer Support"/>
                                    Customer Support
                                </li>
                                <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer hover:font-bold transition-all text-sm">
                                    <img className="h-6 w-6 mr-3 " src="/Picture14.png" alt="Reports"/>
                                    Reports
                                </li>
                                <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer hover:font-bold transition-all text-sm">
                                    <img className="h-6 w-6 mr-3 " src="/Picture16.png" alt="Settings"/>
                                    Settings
                                </li>
                                <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer  hover:font-bold transition-all text-sm">
                                    <img className="h-6 w-6 mr-3 " src="/Picture15.png" alt="Log Out"/>
                                    Log Out
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
