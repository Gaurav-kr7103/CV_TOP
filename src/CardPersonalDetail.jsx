import { Input } from "./freqUsedComponents/Input"

export function CardPersonalDetail( {formData, setFormData} ) {
    // const [formData,setFormData] = useState({
    //     fname : "",
    //     email : "",
    //     tel : "",
    // })

    function handleEvent (event) {
        const { id, value } = event.target;
        setFormData((prev) => {
            return {
                ...prev,
                [id] : value
            }
        })
    }

    return (
        <form className="personalDetail">
            <h2>Personal Details</h2>
            <Input heading="Full Name" type="text" id="fname" value={formData.fname} onChange={handleEvent}/>
            <Input heading="Email" type="email" id="email" value={formData.email} onChange={handleEvent}/>
            <Input heading="Phone Number" type="tel" id="tel" pattern="^\+?[1-9][0-9]{10}$" value={formData.tel} onChange={handleEvent}/>
        </form>
    )
}