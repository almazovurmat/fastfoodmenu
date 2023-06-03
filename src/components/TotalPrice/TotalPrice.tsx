import React, {useState} from 'react';
import {OrderItemType} from "../../types/types";

interface IProps {
    items: OrderItemType[];
}

const TotalPrice: React.FC <IProps> = ({items}) => {
    const [listItems, setListItems] = useState<OrderItemType[]|null>(null);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    if (items && items !== listItems) {
        const countPrice = (): number => {
            return items.reduce((acc, ingredient) => {
                return acc + ingredient.price;
            }, 0);
        };

        setTotalPrice(countPrice());
        setListItems(items);
    }
    return (
        totalPrice > 0 ? <div className="totalPrice"><b>Total price: {totalPrice}</b></div> : null
    );
};

export default TotalPrice;