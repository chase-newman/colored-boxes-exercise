import React from 'react';


const box = (props) => {
    
    const color = props.color
    
    return <div style={{
        height: "100px",
        width: "100px",
        display: "inline-block",
        backgroundColor: color
    }}></div>
}


export default box;