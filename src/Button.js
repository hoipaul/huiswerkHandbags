import React from "react";

function Button({type, title}) {
    return (
        <button type={type}
                className="button"
                onClick={() => console.log(title)}
        >{title}
        </button>
    );
}

export default Button;