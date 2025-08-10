import {useState} from "react";

export function Input ({heading , type, id, pattern="", value="", onChange}) {

    function handleEvent(event) {
        setValue(event.target.val);
    }

    return (
        <div>
            <label htmlFor={id}>{heading}</label>
            <input type={type} name={id} id={id} placeholder={`${heading}..`}
                onChange={handleEvent}
                value = {value}
                pattern= {pattern}
                onChange = {onChange}
            />
        </div>
    )
}