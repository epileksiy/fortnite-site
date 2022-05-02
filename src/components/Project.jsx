import React from 'react';
import classNames from "classnames";

const Project = ({text,first,second,third}) => {
    return (
        <div className="works__feed-item">
            <div className={classNames("works__feed-item-img",{first:first},{second:second},{third:third})}></div>
            <h3>{text}</h3>
        </div>
    );
};

export default Project;
