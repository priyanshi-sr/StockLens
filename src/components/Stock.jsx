import React from 'react';
import Navbar from "./Navbar.jsx";
import Index from "./Index.jsx";
import Most_Bought from "./Most_Bought.jsx";
import Products_Tools from "./Products_Tools.jsx";
import Top_Gainers from "./Top_Gainers.jsx";
import ETFs from "./ETFs.jsx";
import The_Bull_Bulletin from "./The_Bull_Bulletin.jsx";
import Top_Losers from "./Top_losers.jsx";
import Top_Sectors from "./Top_Sectors.jsx";
import Company_Table from "./Company_Table.jsx";
import Footer from "./Footer.jsx";


const Stock = () => {

    return (
      <>
          <Navbar/>
          <Index/>
          <Most_Bought/>
          <Products_Tools/>
          <Top_Gainers/>
          <ETFs/>
          <The_Bull_Bulletin/>
          <Top_Losers/>
          <Top_Sectors/>
          <Company_Table/>
          <Footer/>


      </>
    );
};

export default Stock;
