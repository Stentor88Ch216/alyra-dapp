import React from "react";
import { useState } from 'react';

const TextField = ({label, placeholder, buttonLabel, handleSubmit}) => {

    const [text, setText] = useState("");

    return (
        <div>
            <form onSubmit={ (event) => {
                event.preventDefault();
                handleSubmit(text);
                setText("")
            }}>
                <label>{label}
                    <input
                        type="text"
                        placeholder={placeholder}
                        value = {text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </label>
                <input type="submit" value={buttonLabel}/>
            </form>
        </div>
    )
}

export default TextField