import React from 'react';
import './User.css';

const outputElement = (props) => {
    return(
        <div className={"User"}>
            <p>The username is: {props.userName}</p>
            <p>Space!</p>
        </div>
    )
}

export default outputElement;