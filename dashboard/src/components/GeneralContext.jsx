import React from 'react';

import BuyActionWindow from './BuyActionWindow';
import { useState } from 'react';

const GeneralContext = React.createContext({
    openBuyWindow: (uid) => {},
    openSellWindow: (uid) => {},
    closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [selectedStockUID, setSelectedStockUID] = useState("");
    const [selectedOrderMode, setSelectedOrderMode] = useState("BUY");

    const handleOpenBuyWindow = (uid) => {
        setSelectedOrderMode("BUY");
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    };

    const handleOpenSellWindow = (uid) => {
        setSelectedOrderMode("SELL");
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    };

    const handleCloseBuyWindow = () => {
        setIsBuyWindowOpen(false);
        setSelectedStockUID("");
        setSelectedOrderMode("BUY");
    };

    return(
        <GeneralContext.Provider
           value={{
            openBuyWindow: handleOpenBuyWindow,
            openSellWindow: handleOpenSellWindow,
            closeBuyWindow: handleCloseBuyWindow,
           }}
           >
            {props.children}
            {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} mode={selectedOrderMode} />}
           </GeneralContext.Provider>
    );
};

export default GeneralContext;
