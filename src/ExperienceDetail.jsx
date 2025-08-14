import { useState } from "react";
import { Input } from "./freqUsedComponents/Input";

function Form ({formData, setFormData}) {
    
    function handleEvent(event) {
        const {id, value} = event.target;
        setFormData((prev) => {
            return {
                ...prev,
                [id] : value,
            }
        })
    }

    return (
        <form className="ExpDetail">
            <h3>Enter Experience Detail</h3>
            <Input heading="Company Name" type="text" id="companyName" value={formData.companyName} onChange={handleEvent}/>
            <Input heading="Position Title" type="text" id="positionTitle" value={formData.positionTitle} onChange={handleEvent}/>
            <div>
                <Input heading="Start Date" type="text" id="startDate" value={formData.startDate} onChange={handleEvent}/>
                <Input heading="End Date" type="text" id="endDate" value={formData.endDate} onChange={handleEvent}/>
            </div>
            <div>
                <label htmlFor="description"></label>
                <textarea name="description" id="description" placeholder="description" value={formData.description} onChange={handleEvent}></textarea>
            </div>
        </form>
    )
}

export function ExperienceDetail( {expList, setExpList} ) {

    // const [expList, setExpList] = useState([]);
    const [showForm, setForm] = useState(false);
    const [formData, setFormData] = useState({
        companyName : "",
        positionTitle : "",
        startDate : "",
        endDate : "",
        description : ""
    });

    return (
        <div className="experienceDetail">
            <h2>Experience Details</h2>
            {!showForm ? 
                <div>
                    {expList.map((exp) => {
                        return (
                            <div key={exp.key}>
                                <h3>{exp.companyName}</h3>
                                <button
                                    onClick={() => {
                                        let newList = [...expList];
                                        const idx = newList.findIndex(e=>e === exp)
                                        if (idx !== -1)
                                            newList.splice(idx,1);
                                        setExpList(newList);
                                    }}
                                >    Delete
                                </button>
                            </div>
                        )
                    })}

                    <button onClick={()=>setForm(true)}>Add Experience</button>
                </div>
            :
                <div>
                    <Form formData={formData} setFormData={setFormData}/>
                    <button onClick={()=>setForm(false)}>Cancel</button>
                    <button onClick={() => {
                        let newList = [...expList];
                        formData.key = crypto.randomUUID();
                        newList.push({...formData});
                        setForm(false);
                        setExpList(newList);
                        setFormData({
                            companyName : "",
                            positionTitle : "",
                            startDate : "",
                            endDate : "",
                            description : ""
                        })
                    }}>Save</button>
                </div>
            }
        </div>
    )
}