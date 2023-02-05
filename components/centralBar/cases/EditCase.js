import {useState} from "react";
import CaseLayout from "@/components/centralBar/cases/CaseLayout";
import EditFeatures from "@/components/centralBar/cases/features/EditFeatures";
import {deleteCase, getCases, updateCase} from "@/helpers/casesHelpers";

const EditCase = ({index, cases, setCases, handleActiveAlert, infuraApi}) => {
    const {id} = cases[index];

    const [info, setInfo] = useState(cases[index].info)
    const [startDate, setStartDate] = useState(
        isNaN(cases[index].startDate) || cases[index].startDate === "0"
            ? ""
            : new Date(cases[index].startDate*1000).toISOString().split('T')[0]
    );
    const [endDate, setEndDate] = useState(
        isNaN(cases[index].endDate) || cases[index].endDate === "0"
            ? ""
            : new Date(cases[index].endDate*1000).toISOString().split('T')[0]
    );


    const handleChange = (target, event) => {
        let newInfo = Object.assign({}, info);
        newInfo[target] = event.target.value
        setInfo(newInfo);
        // let newCases = Array.from(cases);
        // newCases[index].info[target] = event.target.value;
        // setCases(newCases);
    }

    const removeCase = async () => {
        const respond = await deleteCase(id);

        if (respond.ok) {
            handleActiveAlert("Case deleted successfully", "success");
            const cases = await getCases(infuraApi);
            setCases(cases);
        } else {
            handleActiveAlert(respond.error, "danger")
        }
    }

    const pushChanges = async () => {
        if (startDate === "") {
            handleActiveAlert("Start date can not be null", "success");
            return;
        }

        const startDateEpoch = new Date(startDate).getTime() / 1000;
        const endDateEpoch = (endDate === "0" || !endDate) ? "0" : new Date(endDate).getTime() / 1000;

        const respond = await updateCase(id, info, startDateEpoch, endDateEpoch);

        if (!respond.ok) {
            handleActiveAlert(respond.error, "danger");
        } else {
            const cases = await getCases(infuraApi);
            if (cases.ok) {
                setCases(cases.cases);
            }
            handleActiveAlert("Case updated successfully", "success");
        }
    }

    const header =
        <>
            <div className={"d-flex"}>
                <div className={"btn-group mb-2 me-auto"}>
                    <button className={"btn btn-outline-primary"} onClick={pushChanges}>Push changes</button>
                    <button className={"btn btn-outline-danger"} onClick={removeCase}>Delete case</button>
                </div>
            </div>
            <div className={"input-group mb-2"}>
                <span className={"input-group-text"}>Name</span>
                <input className={"form-control"} value={info.name} onChange={event => handleChange("name", event)}/>
                <span className={"input-group-text"}>Url</span>
                <input className={"form-control"} value={info.link} onChange={event => handleChange("link", event)}/>
            </div>
        </>;

    const caseBody =
        <>
            <div className={"input-group mt-2"}>
                <span className={"input-group-text"}>Performance</span>
                <textarea className={"form-control"} value={info.performance} onChange={event => handleChange("performance", event)}/>
            </div>
            <div className={"input-group mt-2"}>
                <span className={"input-group-text"}>Team</span>
                <input className={"form-control"} value={info.team} onChange={event => handleChange("team", event)}/>
            </div>
            <div className={"input-group mt-2 mb-2"}>
                <span className={"input-group-text"}>Start date</span>
                <input type={"date"} className={"form-control"} value={startDate} onChange={event => setStartDate(event.target.value)}/>
                <span className={"input-group-text"}>End date</span>
                <input type={"date"} className={"form-control"} value={endDate} onChange={event => setEndDate(event.target.value)}/>
            </div>
        </>;

    const description = <textarea
        className={"form-control mb-2 mt-2"}
        value={info.description}
        onChange={event => handleChange("description", event)}
        rows={4}
        id={"description"}
    />;

    const features = <EditFeatures cases={cases} setCases={setCases} index={index}/>;

    return (
        <CaseLayout header={header} caseBody={caseBody} description={description} features={features} id={id}/>
    );
};

export default EditCase;