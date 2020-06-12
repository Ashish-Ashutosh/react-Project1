import React from 'react';


const inputElement = (props) => {
    return(
            <div style={props.style}>
                <input type={"text"} onChange={props.newName} value={props.defaultName} />
            </div>
    )
}

export default inputElement;
