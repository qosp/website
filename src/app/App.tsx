import React from "react";
import './App.scss'
import {Navbar} from "./components/navbar/Navbar";
import {Footer} from "./components/footer/Footer";
import {HomeScreen} from "./screens/home/HomeScreen";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import {DownloadScreen} from "./screens/download/DownloadScreen";
import {SupportScreen} from "./screens/support/SupportScreen";

export default function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={HomeScreen}/>
                    <Route path="/download" component={DownloadScreen}/>
                    <Route path="/support" component={HomeScreen}/>
                </Switch>
            </Router>

            <Footer/>
        </div>
    );
}
