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
            <div className="education">
                <h2>Education</h2>
                {educationList.map((education) => {
                    return (
                        <div className="education_per">
                            <div>
                                <div>
                                    <div>School : {education.schoolName}</div>
                                    <div>Degree : {education.degreeName}</div>
                                </div>
                                <div>
                                    <div>
                                        Start Date:
                                        {education.startDate}
                                    </div>
                                    <div>
                                        End Date:
                                        {education.endDate}
                                    </div>
                                </div>
                            </div>
                            <div>
                                Graduation Percentage : {education.grad_perc}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="experience">
                <h2>Experience</h2>
                {/* companyName : "",
        positionTitle : "",
        startDate : "",
        endDate : "",
        description : "" */}
                {expList.map((exp) => {
                    return (
                        <div className="exp_per">
                            <div>
                                <div>
                                    <div>Company : {exp.companyName}</div>
                                    <div>Position : {exp.positionTitle}</div>
                                </div>
                                <div>
                                    <div>
                                        Start Date:
                                        {exp.startDate}
                                    </div>
                                    <div>
                                        End Date:
                                        {exp.endDate}
                                    </div>
                                </div>
                            </div>
                            <div>
                                Description <br />
                                {exp.description} 
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}