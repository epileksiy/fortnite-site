import React from 'react';
import {Link} from "react-router-dom";
import classNames from "classnames";

const Card = ({text1,text2,text3,buttonText,link,one,two,three}) => {
    return (
        <div className={classNames("picker__card",{imgone:one},{imgtwo:two},{imgthree:three})} style={{background:'../../public/assets/shoot.png'}}>
            <div className="picker__card-text">
                <h1>{text1}</h1>
                <h4>{text2}</h4>
                <h4>{text3}</h4>
            </div>
            <button>
                {link ? <Link to={link}><h5>{buttonText}</h5></Link> : <h5>{buttonText}</h5>}
            </button>
        </div>
    );
};

export default Card;
