import React from "react";
import './App.scss'
import {Navbar} from "./components/navbar/Navbar";
import {Footer} from "./components/footer/Footer";
import {HomeScreen} from "./screens/home/HomeScreen";
import {
    HashRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import {DownloadScreen} from "./screens/download/DownloadScreen";
import {PrivacyPolicyScreen} from "./screens/privacy/PrivacyPolicyScreen";
import {SupportScreen} from "./screens/support/SupportScreen";
import {DONATE_FDROID_LINK} from "./utils/Constants";

export default function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={HomeScreen}/>
                    <Route path="/download" component={DownloadScreen}/>
                    <Route path="/support" component={SupportScreen}/>
                    <Route path={"/privacy"} component={PrivacyPolicyScreen}/>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}
