const CaseLayout = ({id, header, caseBody, description, features}) => {
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
};

export default CaseLayout;