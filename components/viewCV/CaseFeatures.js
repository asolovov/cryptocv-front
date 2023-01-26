import CaseFeature from "@/components/viewCV/CaseFeature";
import {useState} from "react";

const CaseFeatures = ({cases, setCases, index, isEdit}) => {
    const [description, setDescription] = useState("");
    const {info} = cases[index];

    const addFeature = () => {
        let newCases = Array.from(cases);
        newCases[index].info.features.push(description);
        setCases(newCases);
    }

    const add =  isEdit
        ?
        <div className={"input-group mt-2 mb-2"}>
            <button className={"btn btn-outline-secondary"} onClick={addFeature}>Add</button>
            <input className={"form-control"} placeholder={"description"} onChange={event => setDescription(event.target.value)}/>
        </div>
        : null;

    return (
        <>
            {add}
            <ul className="list-group list-group-flush">
                {info && info.features.map((_, featureIndex) =>
                    <CaseFeature
                        key={featureIndex}
                        setCases={setCases}
                        cases={cases}
                        featureIndex={featureIndex}
                        caseIndex={index}
                        isEdit={isEdit}
                    />
                )}
            </ul>
        </>
    );
};

export default CaseFeatures;