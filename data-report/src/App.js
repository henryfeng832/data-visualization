import './App.less';
import TopView from "./components/TopView";
import SalesView from "./components/SalesView";
import BottomView from "./components/BottomView";
import MapView from "./components/MapView";
import {createContext, useEffect, useState} from "react";
import {mapScatter, screenData, wordcloud} from "./api";

const initialData = {reportData: {category: {}}, wordCloud: [], mapData: {}}
export const AjaxContext = createContext(initialData);

function App() {
    const [ajaxData, setAjaxData] = useState(initialData)

    useEffect(() => {
        Promise.all([screenData(), wordcloud(), mapScatter()]).then(([reportData, wordCloud, mapData]) => {
            setAjaxData({
                reportData,
                wordCloud,
                mapData
            })
        })
    }, [])

    return (
        <div className="App">
            {/*<button onClick={() => {*/}
            {/*    setAjaxData({})*/}
            {/*}}>change context</button>*/}
            <AjaxContext.Provider value={ajaxData}>
                <TopView/>
                <SalesView/>
                <BottomView/>
                <MapView/>
            </AjaxContext.Provider>
        </div>
    );
}

export default App;
