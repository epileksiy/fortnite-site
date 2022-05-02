import React from 'react';
import Card from "./Card";
import './Picker.scss';
import {Link} from "react-router-dom";

const Picker = (changeFooter) => {
    return (
        <React.Fragment>
            <div className="picker">
                <Card text1={'Контакты'} text2={'Подписывайся на наши соцсети'} text3={'Ты найдёшь для себя много интересного'} buttonText={'Начать'} link={"/contacts"} one/>
                <Card text1={'О нас'} text2={'Наша команда'} text3={''} buttonText={'Начать'} link={"/about"} two/>
                <Card text1={'Другие работы'} text2={''} text3={'Ты найдёшь для себя много интересного'} buttonText={'Начать'} link={"/works"} three/>
            </div>
            <div className="App-footer">
                <h3>Выберите игровой режим</h3>
            </div>
        </React.Fragment>
    );
};

export default Picker;
