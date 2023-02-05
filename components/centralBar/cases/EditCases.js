import EditCase from "@/components/centralBar/cases/EditCase";
import {addCase, getCases} from "@/helpers/casesHelpers";

const EditCases = ({cases, setCases, handleActiveAlert, infuraApi}) => {
    if (cases) cases.sort((a, b) => a.startDate < b.startDate ? 1: -1);

    const handlePushCase = async (event) => {
        event.preventDefault();
        const info = {
            name: event.target.name.value,
            link: event.target.link.value,
            performance: event.target.performance.value,
            team: event.target.team.value,
            description: event.target.description.value,
            features: event.target.features.value.split(", ")
        }

        const startDate = new Date(event.target.startDate.value).getTime() / 1000;
        const endDate = event.target.endDate.value ? new Date(event.target.endDate.value).getTime() / 1000 : "0";

        const respond = await addCase(info, startDate, endDate);

        if (!respond.ok) {
            handleActiveAlert(respond.error, "danger");
        } else {
            const cases = await getCases(infuraApi);
            if (cases.ok) {
                setCases(cases.cases);
            }
            handleActiveAlert("Case pushed successfully", "success");
        }

    }

    return (
        <div className={"col"}>
            <form onSubmit={event => handlePushCase(event)}>
                <button className={"btn btn-primary mb-3 w-100"} type={"submit"}>Push case</button>
                <div className={"input-group mb-3"}>
                    <span className={"input-group-text"}>Case name</span>
                    <input className={"form-control"} type={"text"} required={true} id={"name"} />
                    <span className={"input-group-text"}>Team</span>
                    <input className={"form-control"} type={"text"} required={true} id={"team"}/>
                </div>
                <div className={"input-group mb-3"}>
                    <span className={"input-group-text"}>Link</span>
                    <input className={"form-control"} type={"url"} id={"link"}/>
                </div>
                <div className={"input-group mb-3"}>
                    <span className={"input-group-text"}>Performance</span>
                    <textarea rows={3} className={"form-control"} required={true} id={"performance"}/>
                </div>
                <div className={"input-group mb-3"}>
                    <span className={"input-group-text"}>Start date</span>
                    <input className={"form-control"} type={"date"} required={true} id={"startDate"} />
                    <span className={"input-group-text"}>End date</span>
                    <input className={"form-control"} type={"date"} id={"endDate"}/>
                </div>
                <div className={"mb-3"}>
                    <label htmlFor={"description"} className="form-label">Description: </label>
                    <textarea className={"form-control"} rows={5} required={true}  id={"description"}/>
                </div>
                <div className={"mb-3"}>
                    <label htmlFor={"description"} className="form-label">Features: </label>
                    <textarea className={"form-control"} rows={1} placeholder={"Feature 1, feature 2, ..."} required={true} id={"features"}/>
                </div>
                <hr/>
            </form>
            {cases && cases.map((_, index) =>
                <EditCase key={index} index={index} cases={cases} setCases={setCases} handleActiveAlert={handleActiveAlert} infuraApi={infuraApi}/>
            )}
        </div>
    );
};

export default EditCases;