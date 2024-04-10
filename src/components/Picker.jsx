import React from 'react';
import Card from "./Card";
import './Picker.scss';
import {Link} from "react-router-dom";

const Picker = (changeFooter) => {
    return (
        <React.Fragment>
            <div className="picker">
                <Card text1={'CONTACTS'} text2={'Contact us'} text3={''} buttonText={'PLAY'} link={"/contacts"} one/>
                <Card text1={'ABOUT'} text2={'Some words about our team'} text3={''} buttonText={'START'} link={"/about"} two/>
                <Card text1={'WORKS'} text2={''} text3={'Proves we can do a lot'} buttonText={'WOW LET ME SEE'} link={"/works"} three/>
            </div>
            <div className="App-footer">
                <h3>Pick your game mode :)</h3>
            </div>
        </React.Fragment>
    );
};

export default Picker;
