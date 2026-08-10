import React from "react";

const Button = ({ text, onClick, className, ...props }) => {
    return (
        <button onClick={onClick} className={className} {...props}>
            {text}
        </button>
    )
}

export default Button;