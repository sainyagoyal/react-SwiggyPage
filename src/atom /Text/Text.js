import React from "react";
import './Text.css'

function Text(props){
    const {text}=props;
    return(
        <span className="text">{text}</span>
    )
}
export default Text;