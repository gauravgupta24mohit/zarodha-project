import React, { useContext, useState } from 'react';
import axios from 'axios';

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode = "BUY" }) =>{
    const context = useContext(GeneralContext);
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);
    const orderLabel = mode === "SELL" ? "Sell" : "Buy";

    const handleOrderClick = async () => {
        try {
            await axios.post("http://localhost:3002/newOrder", {
                name: uid,
                qty: Number(stockQuantity),
                price: Number(stockPrice),
                mode: "BUY"
            });

            context.closeBuyWindow();
        } catch (error) {
            console.error(`${orderLabel} order failed:`, error);
        }
    };

    const handleCancelClick = () => {
        context.closeBuyWindow();
    };

    return (
        <div className="container" id="buy-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                           type="number"
                           name="qty"
                           id="qty"
                           onChange={(e) => setStockQuantity(e.target.value)}
                           value={stockQuantity}
                           />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            value={stockPrice}
                            onChange={(e) => setStockPrice(e.target.value)}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Margin required ₹140.65 </span>
            </div>

            <button type="button" className="btn btn-blue" onClick={handleOrderClick}>
                {orderLabel}
            </button>
            <button type="button" className="btn btn-grey" onClick={handleCancelClick}>
                Cancel
            </button>
        </div>
    );
};


export default BuyActionWindow;