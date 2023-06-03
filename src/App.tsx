import React from 'react';
import './App.css';
import hamburger from './assets/images/hamburger-ic.png';
import cheeseburger from './assets/images/cheeseburger-ic.png';
import fries from './assets/images/fries-ic.png';
import coffee from './assets/images/coffee-ic.png';
import tea from './assets/images/tea-ic.png';
import coke from './assets/images/coke-ic.png';
import {MenuType} from "./types/types";

function App() {
    const MENU: MenuType[] = [
        {title: "Humburger", price: 80, image: hamburger},
        {title: "Coffee", price: 70, image: coffee},
        {title: "Cheeseburger", price: 90, image: cheeseburger},
        {title: "Tes", price: 50, image: tea},
        {title: "Fries", price: 45, image: fries},
        {title: "Coca Cola", price: 40, image: coke},
    ];

    return (
        <div className="App">
            <div className="orderBlocks orderList">
                <h3 className="title">Order Details</h3>

            </div>
            <div className="orderBlocks menuBlock">
                <h3 className="title">Add items</h3>
                <div className="menu">
                    {
                        MENU.map((menu: MenuType, index: number) => (
                            <div key={index} className="menuItem">
                                <span className="imgBlock">
                                    <img src={menu.image} alt={menu.title}/>
                                </span>
                                <span className="infoBlock">
                                    <h5 className="titleItem">{menu.title}</h5>
                                    <p className="priceItem"><b>Price: </b>{menu.price}</p>
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
