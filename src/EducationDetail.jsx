import { Input } from "./freqUsedComponents/Input"
import { useState } from "react";

function Form ({formData, setFormData}) {

    function handleEvent(event) {
        const { id, value } = event.target;
        setFormData((prev) => {
            return {
                ...prev,
                [id] : value
            }
        })
    }

    return (
        <form className="EducationDetail">
            <h3>Enter Educational Details</h3>
            <Input heading="School" type="text" id="schoolName" value={formData.schoolName}  onChange={handleEvent}/>
            <Input heading="Degree" type="text" id="degreeName" value={formData.degreeName}  onChange={handleEvent}/> 
            <div>
                <Input heading="Start Date " type="text" id="startDate" value={formData.startDate} onChange={handleEvent}/>
                <Input heading="End Date " type="text" id="endDate" value={formData.endDate} onChange={handleEvent}/>
            </div>
            <Input heading="Graduation Percentage " type="text" id="grad_perc" value={formData.grad_perc} onChange={handleEvent}/>
        </form>
    )
}

export function EducationDetail( {educationList, setEducationList} ) {

    // const [educationList, setEducationList] = useState([]);
    const [showForm, setForm] = useState(false);
    const [formData, setFormData] = useState ({
        schoolName: "",
        degreeName: "",
        startDate: "",
        endDate: "",
        grad_perc: "",
        key:""
    });

    return (
        <div>
            <h2>Education Details</h2>
            {!showForm ? 
                <div>
                    {console.log(educationList)}
                    {educationList.map((education) => {
                        return (
                            <div key={education.key}>
                                <h3>{education.schoolName}</h3>
                                <button
                                    onClick={() => {
                                        // console.log(education);
                                        let newList = [...educationList];
                                        const idx = newList.findIndex(edu=>edu === education)
                                        if (idx !== -1)
                                            newList.splice(idx,1);
                                        setEducationList(newList);
                                    }}
                                >Delete</button>
                            </div>
                        );
                    })}

                    <button onClick={()=>setForm(true)}>Add Education</button>
                </div>
                :
                <div>
                    <Form formData={formData} setFormData = {setFormData}/>
                    <button onClick={() => setForm(false)}>Cancel</button>
                    <button onClick={() => {
                        let newList = [...educationList];
                        formData.key = crypto.randomUUID();
                        newList.push({...formData});
                        setEducationList(newList);
                        setFormData({
                            schoolName: "",
                            degreeName: "",
                            startDate: "",
                            endDate: "",
                            grad_perc: "",
                            key:""
                        });
                        setForm(false);
                    }}>Save</button>
                </div>
            } 
        </div>
    );
}