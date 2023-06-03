import React from 'react';
import {OrderItemType} from "../../types/types";

interface IProps {
    orderItems: OrderItemType;
    deleteItemFromOrder: (menuItem: OrderItemType) => void;
}

const OrderItem: React.FC<IProps> = ({orderItems, deleteItemFromOrder}) => {
    const deleteItem = () => {
        deleteItemFromOrder(orderItems);
    };

    return (
        <div className="itemOrder">
            <span className="itemOrderName">{orderItems.title}</span>
            <span className="quantity">{orderItems.quantity}</span>
            <span className="priceOrder">{orderItems.price}</span>
            <button className="btn" onClick={deleteItem}>X</button>
        </div>
    );
};

export default OrderItem;