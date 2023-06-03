import React from 'react';
import {OrderItemType} from "../../types/types";

interface IProps {
    orderItems: OrderItemType;
}
const OrderItem: React.FC<IProps> = ({orderItems}) => {
    return (
        <div className="itemOrder">
            <span className="itemOrderName">{orderItems.title}</span>
            <span className="quantity">{orderItems.quantity}</span>
            <span className="priceOrder">{orderItems.price}</span>
        </div>
    );
};

export default OrderItem;