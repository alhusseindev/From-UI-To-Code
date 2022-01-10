import React from 'react';
import './App.scss';
import TopHeader from "./Components/TopHeader/TopHeader";
import TopSeparator from "./Components/TopSeparator/TopSeparator";
import MiddleBanner from "./Components/MiddleBanner/MiddleBanner";
import LastSeparator from "./Components/LastSeparator/LastSeparator";
import BottomBanner from "./Components/BottomBanner/BottomBanner";

function App(){
    return(
        <main className="app">
            <TopHeader />
            <TopSeparator />
            <MiddleBanner />
            <LastSeparator />
            <BottomBanner />
        </main>

    );
}

export default App;
