import {useState} from "react";
import EditEducation from "@/components/centralBar/eductation/EditEducation";
import {addInMainInfo} from "@/helpers/editMainInfoHelpers";

const EditEducations = ({mainInfo, setMainInfo}) => {
    const [newYear, setNewYear] = useState(new Date().getFullYear().toString());
    const [newDescription, setNewDescription] = useState('');

    return (
        <>
            <div className={"input-group mb-3"}>
                <button
                    className={"btn btn-outline-secondary"}
                    onClick={() => addInMainInfo(mainInfo, setMainInfo, "education", { year: newYear, description: newDescription })}
                >Add</button>
                <input className={"form-control"} value={newYear} placeholder={"education year"} onChange={event => setNewYear(event.target.value)}/>
                <input className={"form-control w-75"} value={newDescription} placeholder={"education description"} onChange={event => setNewDescription(event.target.value)}/>
            </div>
            <ul className="list-group list-group-flush">
                {mainInfo && mainInfo.education.map((_, index) =>
                    <EditEducation key={index} index={index} mainInfo={mainInfo} setMainInfo={setMainInfo}/>
                )}
            </ul>
        </>
    );
};

export default EditEducations;