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
            <h2>Personal Details</h2>
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

export function EducationDetail() {

    const [educationList, setEducationList] = useState([]);
    const [showForm, setForm] = useState(false);
    const [formData, setFormData] = useState ({
        schoolName: "",
        degreeName: "",
        startDate: "",
        endDate: "",
        grad_perc: ""
    });

    return (
        <div>
            <h2>Education Details</h2>
            {!showForm ? 
                <div>
                    {educationList.map((education) => {
                        return (
                            <div>
                                <h3>{education}</h3>
                                <button onClick={()=> {
                                    setForm(true);
                                }}>Edit</button>
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
                        let newList = educationList;
                        newList.push("education Institute");
                        setEducationList(newList);
                        setForm(false);
                    }}>Save</button>
                    {/* <button>Reset</button> */}
                </div>
            } 
        </div>
    );
}