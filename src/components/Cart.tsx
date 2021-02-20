import React, {createContext, FC, useContext, useState} from 'react';
import './Cart.css';
import {items} from './CartData';


const summarizeCart: any = (cart: ItemModel[]) => {
    const groupedItems = cart.reduce((summary: any, item) => {
        summary[item.id] = summary[item.id] || {
            ...item,
            count: 0
        };
        summary[item.id].count++;
        return summary;
    }, {});
    return Object.values(groupedItems);
};

export const Shopper: FC = () => {
    const [activeTab, setActiveTab] = useState('items');
    const [cart, setCart] = useState<ItemModel[]>([]);

    const addToCart = (item: ItemModel) => {
        setCart(prevCart => [...prevCart, item]);
    };

    const removeItem = (item: ItemModel) => {
        let index = cart.findIndex(i => i.id === item.id);
        if (index >= 0) {
            setCart(cart => {
                const copy = [...cart];
                copy.splice(index, 1);
                return copy;
            });
        }
    };

    return (
        <div className="App">
            <ShopperNav
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
            <main className="App-content">
                <div>
                    {cart.length} items
                </div>
                <Content
                    tab={activeTab}
                    onAddToCart={addToCart}
                    onRemoveOne={removeItem}
                    cart={summarizeCart(cart)}
                />
            </main>
        </div>
    );
}

type NavProps = {
    activeTab: string;
    onTabChange: (tabName: string) => void;
}

export const ShopperNav: FC<NavProps> = ({activeTab, onTabChange}) => {
    const itemClass = (tabName: string) =>
        `App-nav-item ${
            activeTab === tabName ? 'selected' : ''
        }`;

    return (
        <nav className="App-nav">
            <ul>
                <li className={itemClass('items')}>
                    <button onClick={() => onTabChange('items')}> Items
                    </button>
                </li>
                <li className={itemClass('cart')}>
                    <button onClick={() => onTabChange('cart')}>
                        Cart
                    </button>
                </li>
            </ul>
        </nav>
    );
}

type ContentProps = {
    tab: string;
    onAddToCart: (item: ItemModel) => void;
    cart: ItemModel[];
    onRemoveOne: (item: ItemModel) => void;
}

export const Content: FC<ContentProps> = ({tab, onAddToCart, cart, onRemoveOne}) => {
    switch (tab) {
        default:
        case 'items':
            return <ItemPage
                items={items}
                onAddToCart={onAddToCart}/>;
        case 'cart':
            return <CartPage
                items={cart}
                onAddOne={onAddToCart}
                onRemoveOne={onRemoveOne}
            />;
    }
}

export type ItemModel = {
    id: number;
    name: string;
    description?: string;
    price?: number;
    count?: number;
}

type ItemPageProps = {
    items: ItemModel[];
    onAddToCart: (item: ItemModel) => void;
}

export const ItemPage: FC<ItemPageProps> = ({items, onAddToCart}) => {
    return (
        <ul className="ItemPage-items">
            {items.map(item =>
                <li key={item.id} className="ItemPage-item">
                    <Item
                        item={item}
                        onAddToCart={() => onAddToCart(item)}>
                        <button
                            className="Item-addToCart"
                            onClick={() => onAddToCart(item)}>
                            Add to Cart
                        </button>
                    </Item>
                </li>)}
        </ul>
    );
}

type ItemProps = {
    item: ItemModel;
    onAddToCart: (e: any) => void;
};

export const Item: FC<ItemProps> = ({item, children}) => (
    <div className="Item">
        <div className="Item-left">
            <div className="Item-image"/>
            <div className="Item-title">
                {item.name} </div>
            <div className="Item-description"> {item.description}
            </div>
        </div>
        <div className="Item-right">
            <div className="Item-price"> ${item.price} </div>
            {children}
        </div>
    </div>
);

type CartPageProps = {
    items: ItemModel[];
    onAddOne: (e: ItemModel) => void;
    onRemoveOne: (e: ItemModel) => void;
}

export const CartPage: FC<CartPageProps> = ({items, onAddOne, onRemoveOne}) => {
    return (
        <ul className="CartPage-items"> {items.map(item =>
            <li key={item.id} className="CartPage-item">
                <Item item={item}
                      onAddToCart={() => onAddOne(item)}>
                    <div className="CartItem-controls">
                        <button
                            className="CartItem-removeOne"
                            onClick={() => onRemoveOne(item)}>&ndash;</button>
                        <span className="CartItem-count">{item.count}</span>
                        <button
                            className="CartItem-addOne"
                            onClick={() => onAddOne(item)}>+
                        </button>
                    </div>
                </Item>
            </li>
        )}
        </ul>
    );
}
