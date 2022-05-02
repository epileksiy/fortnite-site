import React from 'react';

import Project from "./Project";
import {BrowserRouter, Link} from "react-router-dom";
// import * as THREE from "three";
// import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";



const Works = () => {

    return (
        <div className="works">
            <div className="works__canvas" >
                <h1>БЛЯТЬ Я ХЗ КАК СДЕЛАТЬ КРАСИВО</h1>
                <p>этот дизайн ебаный</p>
            </div>
            <div className="works__feed">
                <div className="works__feed-list">
                    <Project text="Первый проект, в котором были применены буквально все силы, 3 танца с бубном, 1 без бубна и 1 без цели. Было тяжело, больно и очень скучно. Было сложно себя заставить работать." first/>
                    <Project text="Второй проект, в котором были применены буквально все силы, 3 танца с бубном, 1 без бубна и 1 без цели. Было тяжело, больно и очень скучно. Было сложно себя заставить работать." second/>
                    <Project text="Третий проект, в котором были применены буквально все силы, 3 танца с бубном, 1 без бубна и 1 без цели. Было тяжело, больно и очень скучно. Было сложно себя заставить работать." third/>
                </div>
            </div>
            <div className="App-footer">
                <Link to="/">
                    <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM34 10.5L2 10.5V13.5L34 13.5V10.5Z" fill="white"/>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Works;
