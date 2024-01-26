import { useState } from "react"
const About = () => {
    const[college, updateCollege] = useState("KEC")
    const updatingClg = () => {
        updateCollege("Kongu Engineering College")
    }
    return(
        <div>
            <h1>WelCome To {college}</h1>
            <button onDoubleClick = {updatingClg}>Update College Name</button>
            <h1> </h1>
        </div>
    )
}
export default About