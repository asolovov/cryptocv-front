import styled from "styled-components";
import {AiFillLike} from "react-icons/ai";
import CaseFeatures from "@/components/viewCV/CaseFeatures";

const Case = ({cases, setCases, index, isEdit}) => {
    let header, caseBody, description, features;

    const {info, likes, id} = cases[index];
    const startDate = new Date(cases[index].startDate*1000).toISOString().split('T')[0];
    const endDate = new Date(cases[index].endDate*1000).toISOString().split('T')[0];

    features = <CaseFeatures cases={cases} setCases={setCases} index={index} isEdit={isEdit}/>;

    const handleChange = (target, event) => {
        let newCases = Array.from(cases);
        newCases[index].info[target] = event.target.value;
        setCases(newCases);
    }

    const handleDatesChange = (target, event) => {
        let newCases = Array.from(cases);
        const newDate = new Date(event.target.value).valueOf() / 1000;
        newCases[index][target] = newDate.toString();
        setCases(newCases);
    }

    const upCase = () => {
        if (index === 0) return;
        let newCases = Array.from(cases);
        const element = newCases[index].splice(index, 1)[0];
        newCases[index].splice(index-1, 0, element);
        setCases(newCases);
    }
    const downCase = () => {
        let newCases = Array.from(cases);
        if (index === newCases.length - 1) return;
        const element = newCases[index].splice(index, 1)[0];
        newCases[index].splice(index+1, 0, element);
        setCases(newCases);
    }


    if (isEdit) {
        header =
            <>
                <div className={"d-flex"}>
                    <div className={"btn-group mb-2 me-auto"}>
                        <button className={"btn btn-outline-primary"}>Push changes</button>
                        <button className={"btn btn-outline-danger"}>Delete case</button>
                    </div>
                    <div className={"btn-group mb-2"}>
                        <button className={"btn btn-outline-success"} onClick={upCase}>Up</button>
                        <button className={"btn btn-outline-primary"} onClick={downCase}>Down</button>
                    </div>
                </div>
                <div className={"input-group mb-2"}>
                    <span className={"input-group-text"}>Name</span>
                    <input className={"form-control"} value={info.name} onChange={event => handleChange("name", event)}/>
                    <span className={"input-group-text"}>Url</span>
                    <input className={"form-control"} value={info.link} onChange={event => handleChange("link", event)}/>
                </div>
            </>;

        caseBody =
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
                    <input type={"date"} className={"form-control"} value={startDate} onChange={event => handleDatesChange("startDate", event)}/>
                    <span className={"input-group-text"}>End date</span>
                    <input type={"date"} className={"form-control"} value={endDate} onChange={event => handleDatesChange("endDate", event)}/>
                </div>
            </>;

        description = <textarea
            className={"form-control mb-2 mt-2"}
            value={info.description}
            onChange={event => handleChange("description", event)}
            rows={4}
            id={"description"}
        />;

    } else {
        header =
            <div className={"d-flex gap-2"}>
                <h5 className={"card-title"}><a href={info.link}>{info.name}</a></h5>
                <Like className={"me-auto"}/>
                <span className={"color-indigo h5"}>Likes: {likes}</span>
            </div>;

        caseBody =
            <>
                <div className={"card-body"}>
                    <strong className={"color-indigo"}>My performance:</strong>
                    <p className={"card-text"}>
                        {info.performance}
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong className={"color-indigo"}>Team:</strong> {info.team}</li>
                    <li className="list-group-item"><strong className={"color-indigo"}>Start date:</strong> {startDate}</li>
                    <li className="list-group-item"><strong className={"color-indigo"}>End date:</strong> {endDate}</li>
                </ul>
            </>;

        description =
            <div className={"card-body"}>
                <p className={"card-text"}>
                    {info.description}
                </p>
            </div>;
    }


    return (
        <LayoutC header={header} caseBody={caseBody} description={description} features={features} id={id}/>
    );
};

const LayoutC = ({header, caseBody, description, features, id}) => {
    return (
        <div className="card row mb-4">
            <div className="card-header">
                {header}
                <div className="nav nav-tabs card-header-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id={`nav-case-tab${id}`} data-bs-toggle="tab"
                            data-bs-target={`#nav-case${id}`} type="button" role="tab" aria-controls={`nav-case${id}`}
                            aria-selected="true">Case
                    </button>
                    <button className="nav-link" id={`nav-description-tab${id}`} data-bs-toggle="tab"
                            data-bs-target={`#nav-description${id}`} type="button" role="tab" aria-controls={`nav-description${id}`}
                            aria-selected="false">Description
                    </button>
                    <button className="nav-link" id={`nav-features-tab${id}`} data-bs-toggle="tab"
                            data-bs-target={`#nav-features${id}`} type="button" role="tab" aria-controls={`nav-features${id}`}
                            aria-selected="false">Features
                    </button>
                </div>
            </div>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id={`nav-case${id}`} role="tabpanel"
                     aria-labelledby={`nav-case-tab${id}`}>
                    {caseBody}
                </div>
                <div className="tab-pane fade" id={`nav-description${id}`} role="tabpanel"
                     aria-labelledby={`nav-description-tab${id}`}>
                    {description}
                </div>
                <div className="tab-pane fade" id={`nav-features${id}`} role="tabpanel"
                     aria-labelledby={`nav-features-tab${id}`}>
                    {features}
                </div>
            </div>
        </div>
    );
}

const Like = styled(AiFillLike)`
  padding-top: 2px;
  color: blue;
  font-size: 20px;
  cursor: pointer;
`

export default Case;