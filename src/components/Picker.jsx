import React from 'react';
import Card from "./Card";
import './Picker.scss';
import {Link} from "react-router-dom";

const Picker = (changeFooter) => {
    return (
        <React.Fragment>
            <div className="picker">
                <Card text1={'Contacts'} text2={'Contact us'} text3={''} buttonText={'Начать'} link={"/contacts"} one/>
                <Card text1={'About'} text2={'Some words about our team'} text3={''} buttonText={'Начать'} link={"/about"} two/>
                <Card text1={'Works'} text2={''} text3={'Proves we can do a lot'} buttonText={'Начать'} link={"/works"} three/>
            </div>
            <div className="App-footer">
                <h3>Pick your game mode :)</h3>
            </div>
        </React.Fragment>
    );
};

export default Picker;
