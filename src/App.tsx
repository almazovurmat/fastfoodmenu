import React, {useState} from 'react';
import OrderItem from "./components/OrderItem/OrderItem";
import {MenuType, OrderItemType} from "./types/types";
import './App.css';
import hamburger from './assets/images/hamburger-ic.png';
import cheeseburger from './assets/images/cheeseburger-ic.png';
import fries from './assets/images/fries-ic.png';
import coffee from './assets/images/coffee-ic.png';
import tea from './assets/images/tea-ic.png';
import coke from './assets/images/coke-ic.png';
import TotalPrice from "./components/TotalPrice/TotalPrice";

function App() {
    const MENU: MenuType[] = [
        {title: "Hamburger", price: 80, image: hamburger},
        {title: "Coffee", price: 70, image: coffee},
        {title: "Cheeseburger", price: 90, image: cheeseburger},
        {title: "Tea", price: 50, image: tea},
        {title: "Fries", price: 45, image: fries},
        {title: "Coca Cola", price: 40, image: coke},
    ];

    const [items, setItems] = useState <OrderItemType[]>([]);

    const makeOrder = (menuItem: MenuType) => {
        if (items.length === 0) {
            const orderItem = [{...menuItem, quantity: 1}];
            setItems(orderItem);
        } else {
            setItems(prevState => {
                const itemIndex = prevState.findIndex(
                    ingredient => ingredient.title === menuItem.title
                );

                if (itemIndex !== -1) {
                    const updateOrderItem = [...prevState];
                    if (updateOrderItem[itemIndex].quantity > 0) {
                        updateOrderItem[itemIndex] = {
                            ...updateOrderItem[itemIndex],
                            quantity: updateOrderItem[itemIndex].quantity + 1,
                            price: (updateOrderItem[itemIndex].quantity + 1) * menuItem.price,
                        };
                        return updateOrderItem;
                    }
                } else {
                    const orderItem = {...menuItem, quantity: 1};
                    const updateOrderItem = [...prevState, orderItem];
                    return updateOrderItem;
                }
                return [...prevState];
            });
        }
    };

    const deleteItemFromOrder = (menuItem: MenuType) => {
        setItems(prevState => {
            const updatedItems = prevState.filter(item => item.title !== menuItem.title);
            return updatedItems;
        });
    };

    return (
        <div className="App">
            <div className="orderBlocks orderList">
                <h3 className="title">Order Details</h3>
                {
                    items.length > 0 ? items.map((item, index) => {
                        return <OrderItem key={index} orderItems={item} deleteItemFromOrder={deleteItemFromOrder}/>
                    }) : (<div className="emptyOrder">Order is empty! <br/> Please add some one items!</div>)
                }
                {
                    <TotalPrice items={items} />
                }
            </div>
            <div className="orderBlocks menuBlock">
                <h3 className="title">Add items</h3>
                <div className="menu">
                    {
                        MENU.map((menu: MenuType, index: number) => (
                            <div key={index} className="menuItem" onClick={() => {
                                makeOrder(menu);
                            }}>
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
