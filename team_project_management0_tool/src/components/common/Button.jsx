import React from "react";

const Button = ({text, onClick, className}) => {
    return (
        <button onClick={onClick} className={`text-2xl rounded-2xl p-4 text-amber-100 bg-amber-300 align-middle ${className}`}>
            {text}
        </button>
    )
}

export default Button;