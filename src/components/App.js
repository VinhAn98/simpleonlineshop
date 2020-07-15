import React from "react";
import Header from "./Header";
import ListProduct from "./ListProducts";
import {BrowserRouter,Route} from "react-router-dom";

class App extends React.Component{
    render() {
        return (
            <div className="ui container">
                <Header/>
                <ListProduct/>
            </div>
        );
    }
}

export default App;