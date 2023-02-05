const EditFeature = ({cases, setCases, caseIndex, featureIndex}) => {
    const deleteFeature = () => {
        let newCases = Array.from(cases);
        newCases[caseIndex].info.features.splice(featureIndex, 1);
        setCases(newCases);
    }

    const upFeature = () => {
        if (featureIndex === 0) return;
        let newCases = Array.from(cases);
        const element = newCases[caseIndex].info.features.splice(featureIndex, 1)[0];
        newCases[caseIndex].info.features.splice(featureIndex-1, 0, element);
        setCases(newCases);
    }

    const downFeature = () => {
        let newCases = Array.from(cases);
        if (featureIndex === newCases[caseIndex].info.features.length - 1) return;
        const element = newCases[caseIndex].info.features.splice(featureIndex, 1)[0];
        newCases[caseIndex].info.features.splice(featureIndex+1, 0, element);
        setCases(newCases);
    }

    const handleChange = (event) => {
        let newCases = Array.from(cases);
        newCases[caseIndex].info.features[featureIndex] = event.target.value;
        setCases(newCases);
    }

    return (
        <div className={"input-group mb-2"}>
            <button className={"btn btn-outline-danger"} onClick={deleteFeature}>Delete</button>
            <input
                className={"form-control"}
                value={cases[caseIndex].info.features[featureIndex]}
                onChange={event => handleChange(event)}
            />
            <button className={"btn btn-outline-success"} onClick={upFeature}>Up</button>
            <button className={"btn btn-outline-primary"} onClick={downFeature}>Down</button>
        </div>
    );
};

export default EditFeature;