export function Input ({heading , type, id, pattern="", value="", onChange}) {

    return (
        <div>
            <label htmlFor={id}>{heading}</label>
            <input type={type} name={id} id={id} placeholder={`${heading}..`}
                value = {value}
                pattern= {pattern}
                onChange= {onChange}
            />
        </div>
    )
}