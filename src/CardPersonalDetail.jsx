import { Input } from "./freqUsedComponents/Input"

export function CardPersonalDetail() {
    return (
        <form className="personalDetail">
            <h2>Personal Details</h2>
            <Input heading="Full Name" type="text" id="fname"/>
            <Input heading="Email" type="email" id="email"/>
            <Input heading="Phone Number" type="tel" id="tel" pattern="^\+?[1-9][0-9]{10}$" />
        </form>
    )
}