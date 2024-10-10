import { useState } from 'react'
import reactLogo from './assets/react.svg'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Stock from "./components/Stock.jsx";
import IndexDetails from "./components/IndexDetails.jsx";
import Most_bought_details from "./components/Most_bought_details.jsx";
import Product_tool_details from "./components/Product_tool_details.jsx";
import Top_Gainers from "./components/Top_Gainers.jsx";
import Top_Gainers_Details from "./components/Top_Gainers_Details.jsx";
import See_More_Details from "./components/See_More_Details.jsx";
import AllIndices from "./components/AllIndices.jsx";
import ETFs_Details from "./components/ETFs_Details.jsx";
import The_Bull_Bulletin_Details from "./components/The_Bull_Bulletin_Details.jsx";
import Top_Losers from "./components/Top_losers.jsx";
import Top_Losers_Details from "./components/Top_Losers_Details.jsx";
import Top_Sectors_Details from "./components/Top_Sectors_Details.jsx";
import Company_Table from "./components/Company_Table.jsx";
import Company_Table_Details from "./components/Company_Table_Details.jsx";





function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Stock/>
        },
        {
            path:'/stock/:name',
            element: <IndexDetails/>
        },
        {
            path:'/index/:name0',
            element: <AllIndices/>
        },
        {
            path:'/most_bought/:name1',
            element:<Most_bought_details/>
        },
        {
            path:'/product_tool/:name2',
            element:<Product_tool_details/>
        },
        {
            path:'/top_gainers/:name3',
            element:<Top_Gainers_Details/>
        },
        {
            path:'/see_more/:name4',
            element:<See_More_Details/>
        },
        {
            path:'/etf/:name5',
            element:<ETFs_Details/>
        },
        {
            path:'/the_bull_bulletin/:name6',
            element:<The_Bull_Bulletin_Details/>
        },

        {
            path:'/top_losers/:name7',
            element:<Top_Losers_Details/>
        },
        {
            path:'/top_sectors/:name8',
            element:<Top_Sectors_Details/>
        },
        {
            path:'/companies/:name9',
            element:<Company_Table_Details/>
        }



    ])

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
