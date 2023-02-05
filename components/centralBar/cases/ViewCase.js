import CaseLayout from "@/components/centralBar/cases/CaseLayout";
import ViewCaseFeatures from "@/components/centralBar/cases/features/ViewCaseFeatures";
import {setLike} from "@/helpers/likesHelpers";
import {getCases} from "@/helpers/casesHelpers";

const ViewCase = ({caseEl, setCases, handleActiveAlert}) => {
    const {info, likes, id} = caseEl;
    const {features} = info;

    const startDate = new Date(caseEl.startDate*1000).toISOString().split('T')[0];
    const endDate =
        isNaN(caseEl.endDate) || caseEl.endDate === "0"
            ? "In progress..."
            : new Date(caseEl.endDate*1000).toISOString().split('T')[0];

    const performance = info.performance.split(";")
    console.log("----------")
    console.log(id)
    console.log(performance);

    const handleSetLike = async () => {
        const respond = await setLike(id);
        if (respond.ok) {
            const cases = await getCases();
            if (cases.ok) {
                setCases(cases.cases);
            } else handleActiveAlert(cases.error, "danger")
        } else handleActiveAlert(respond.error, "danger")
    }

    const header =
        <div className={"d-flex gap-2"}>
            <h5 className={"card-title me-auto"}>
                {info.link ? <a href={info.link}>{info.name}</a> : info.name}
            </h5>
            <button className={"btn btn-sm btn-success"} onClick={handleSetLike}>Set like!</button>
            <span className={"color-indigo h5 pt-2"}>Likes: {likes}</span>
        </div>;

    const caseBody =
        <>
            <div className={"card-body"}>
                <strong className={"color-indigo"}>My performance:</strong>
                {info.performance.split(";").map((value, index) => <p key={index} className={"card-text"}>{value}</p>)}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong className={"color-indigo"}>Team:</strong> {info.team}</li>
                <li className="list-group-item"><strong className={"color-indigo"}>Start date:</strong> {startDate}</li>
                <li className="list-group-item"><strong className={"color-indigo"}>End date:</strong> {endDate}</li>
            </ul>
        </>;

    const description =
        <div className={"card-body"}>
            <p className={"card-text"}>
                {info.description}
            </p>
        </div>;

    const featuresEl = <ViewCaseFeatures features={features}/>;

    return (
        <CaseLayout id={id} caseBody={caseBody} description={description} header={header} features={featuresEl}/>
    );
};

export default ViewCase;