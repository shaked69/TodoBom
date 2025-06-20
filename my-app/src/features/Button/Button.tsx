import React from "react";


interface Props{
    text : string
    OnClick : () => void
}


const Button = ({text,OnClick} : Props) => {
    return <button onClick={OnClick}>{text}</button>;
}


export default Button;