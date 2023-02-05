import {useState} from "react";
import EditFeature from "@/components/centralBar/cases/features/EditFeature";

const EditFeatures = ({index, cases, setCases}) => {
    const [description, setDescription] = useState("");
    const {info} = cases[index];

    const addFeature = () => {
        let newCases = Array.from(cases);
        newCases[index].info.features.push(description);
        setCases(newCases);
    }


    return (
        <>
            <div className={"input-group mt-2 mb-2"}>
                <button className={"btn btn-outline-secondary"} onClick={addFeature}>Add</button>
                <input className={"form-control"} placeholder={"description"} onChange={event => setDescription(event.target.value)}/>
            </div>
            <ul className="list-group list-group-flush">
                {info && info.features.map((_, featureIndex) =>
                    <EditFeature
                        key={featureIndex}
                        setCases={setCases}
                        cases={cases}
                        featureIndex={featureIndex}
                        caseIndex={index}
                    />
                )}
            </ul>
        </>
    );
};

export default EditFeatures;