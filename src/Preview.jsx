export function Preview({formData, educationList, expList}) {

    return (
        <div className="preview">
            <div className="header">
                <h1>{formData.fname}</h1>
                <div>
                    <div>{formData.email}</div>
                    <div>{formData.tel}</div>
                </div>
               
            </div>
        </div>
    )

}