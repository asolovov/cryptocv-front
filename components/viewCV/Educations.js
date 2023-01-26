import {useState} from "react";
import Education from "@/components/viewCV/Education";

const Educations = ({mainInfo, setMainInfo, isEdit}) => {
    const [newYear, setNewYear] = useState(new Date().getFullYear().toString());
    const [newDescription, setNewDescription] = useState('');

    const handleNewEd = () => {
        let newMainInfo = Object.assign({}, mainInfo);
        newMainInfo.education.push({ year: newYear, description: newDescription });
        setMainInfo(newMainInfo);
    }

    const add = isEdit
        ?
        <div className={"input-group mb-3"}>
            <button className={"btn btn-outline-secondary"} onClick={handleNewEd}>Add</button>
            <input className={"form-control"} value={newYear} placeholder={"education year"} onChange={event => setNewYear(event.target.value)}/>
            <input className={"form-control w-75"} value={newDescription} placeholder={"education description"} onChange={event => setNewDescription(event.target.value)}/>
        </div>
        : null

    return (
        <>
            {add}
            <ul className="list-group list-group-flush">
                {mainInfo && mainInfo.education.map((_, index) =>
                    <Education isEdit={isEdit} mainInfo={mainInfo} setMainInfo={setMainInfo} index={index} key={index}/>
                )}
            </ul>
        </>
    );
};

export default Educations;