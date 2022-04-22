import React from 'react';
import Card from "./Card";
import './Picker.scss';

const Picker = () => {
    return (
        <div className="picker">
            <Card text1={'Контакты'} text2={'Подписывайся на наши соцсети'} text3={'Ты найдёшь для себя много интересного'} buttonText={'Начать'} link={"/contacts"} one/>
            <Card text1={'О нас'} text2={'Наша команда'} text3={''} buttonText={'Начать'} link={"/about"} two/>
            <Card text1={'Другие работы'} text2={''} text3={'Ты найдёшь для себя много интересного'} buttonText={'Начать'} link={"/works"} three/>
        </div>
    );
};

export default Picker;
