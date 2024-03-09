
import React, { useContext } from 'react'
import { MouseContext } from "../context/mouse-context";
import '../css/Button.scss';

const Button = (props) => {
    const { text, type, icon: Icon, url } = props;
    const { cursorChangeHandler } = useContext(MouseContext);
    if (type === 'price-button'){
        return (
            <button className="btn price-button"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}>
                <a href={url} className={`button ${type}`} target="_blank" rel="noopener noreferrer">
                <span>{text}</span>
                <span>{Icon && <Icon />} </span>
                </a>
            </button> 
        )
    } else{
        return (
            <button className="btn normal-button"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}>
                <span>{text}</span>
            </button>
        )
    }
}

export default Button;
