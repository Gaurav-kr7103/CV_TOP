// import {useState} from "react";
import {CardPersonalDetail} from "./CardPersonalDetail";
import {EducationDetail} from "./EducationDetail";
import { ExperienceDetail } from "./ExperienceDetail";

export function Cards({formData, setFormData, educationList, setEducationList,
        expList, setExpList
}) {
    return (
        <>
            <CardPersonalDetail formData={formData} setFormData={setFormData}/>
            <EducationDetail educationList={educationList} setEducationList={setEducationList} />
            <ExperienceDetail expList={expList} setExpList={setExpList} />
        </>
    )
}
