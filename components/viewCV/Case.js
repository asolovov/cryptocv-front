import styled from "styled-components";
import {AiFillLike} from "react-icons/ai";
import CaseFeatures from "@/components/viewCV/CaseFeatures";

const Case = ({caseEl}) => {
    const {info, likes, id} = caseEl;
    const startDate = new Date(caseEl.startDate*1000).toISOString().split('T')[0];
    const endDate = new Date(caseEl.endDate*1000).toISOString().split('T')[0];

    return (
        <div className="card row mb-4">
            <div className="card-header">
                <div className={"d-flex gap-2"}>
                    <h5 className={"card-title"}><a href={info.link}>{info.name}</a></h5>
                    <Like className={"me-auto"}/>
                    <span className={"color-indigo h5"}>Likes: {likes}</span>
                </div>
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
                </div>
                <div className="tab-pane fade" id={`nav-description${id}`} role="tabpanel"
                     aria-labelledby={`nav-description-tab${id}`}>
                    <div className={"card-body"}>
                        <p className={"card-text"}>
                            {info.description}
                        </p>
                    </div>
                </div>
                <div className="tab-pane fade" id={`nav-features${id}`} role="tabpanel"
                     aria-labelledby={`nav-features-tab${id}`}>
                    <CaseFeatures features={info.features}/>
                </div>
            </div>
        </div>
    );
};

const Like = styled(AiFillLike)`
  padding-top: 2px;
  color: blue;
  font-size: 20px;
  cursor: pointer;
`

export default Case;