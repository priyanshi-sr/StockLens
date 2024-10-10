import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-600 py-8 px-16">
            <div className="grid grid-cols-4 gap-8">

                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">StockLens</h2>
                    <p>
                        Vaishnavi Tech Park, 3rd & 4th Floor <br />
                        Sarjapur Main Road, Bellandur <br />
                        Bengaluru - 560103 <br />
                        <Link to="/contact-us" className="text-blue-500">Contact Us</Link>
                    </p>

                    <div className="flex mt-4 space-x-10">
                        <Link to="/social/facebook" aria-label="Facebook">
                            <img src="Picture37.png" alt="Facebook" />
                        </Link>
                        <Link to="/social/twitter" aria-label="Twitter">
                            <img src="Picture38.png" alt="Twitter" />
                        </Link>
                        <Link to="/social/instagram" aria-label="Instagram">
                            <img src="Picture39.png" alt="Instagram" />
                        </Link>
                        <Link to="/social/linkedin" aria-label="LinkedIn">
                            <img src="Picture40.png" alt="LinkedIn" />
                        </Link>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">PRODUCTS</h3>
                    <ul>
                        <li><Link to="/products/stocks">Stocks</Link></li>
                        <li><Link to="/products/futures-options">Futures & Options</Link></li>
                        <li><Link to="/products/ipo">IPO</Link></li>
                        <li><Link to="/products/mutual-funds">Mutual Funds</Link></li>
                        <li><Link to="/products/nfo">NFO</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">StockLens</h3>
                    <ul>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/media-press">Media & Press</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/help-support">Help and Support</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">QUICK LINKS</h3>
                    <ul>
                        <li><Link to="/amc-mutual-funds">AMC Mutual Funds</Link></li>
                        <li><Link to="/calculators">Calculators</Link></li>
                        <li><Link to="/glossary">Glossary</Link></li>
                        <li><Link to="/open-demat-account">Open Demat Account</Link></li>
                        <li><Link to="/stocklens-digest">StockLens Digest</Link></li>
                        <li><Link to="/sitemap">Sitemap</Link></li>
                        <li><Link to="/web-stories">Web Stories</Link></li>
                    </ul>
                </div>
            </div>

            <div className="border-t mt-8 pt-4 flex flex-col items-center">
                <p className="text-center text-gray-500">
                    © 2016-2024 StockLens. All rights reserved, Built with <span className="text-red-500">&#9829;</span> in India
                </p>
                <div className="flex space-x-4 mt-1">
                    <img src="play_store.png" alt="Google Play Store" className="h-32" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
