import Case from "@/components/viewCV/Case";

const Cases = ({cases, setCases, isEdit}) => {

    const add = isEdit
        ?
        <form>
            <button className={"btn btn-primary mb-3 w-100"}>Push case</button>
            <div className={"input-group mb-3"}>
                <span className={"input-group-text"}>Case name</span>
                <input className={"form-control"} />
                <span className={"input-group-text"}>Team</span>
                <input className={"form-control"} />
            </div>
            <div className={"input-group mb-3"}>
                <span className={"input-group-text"}>Link</span>
                <input type={"url"} className={"form-control"}/>
            </div>
            <div className={"input-group mb-3"}>
                <span className={"input-group-text"}>Performance</span>
                <textarea rows={3} className={"form-control"} />
            </div>
            <div className={"input-group mb-3"}>
                <span className={"input-group-text"}>Start date</span>
                <input className={"form-control"} type={"date"} />
                <span className={"input-group-text"}>End date</span>
                <input className={"form-control"} type={"date"}/>
            </div>
            <div className={"mb-3"}>
                <label htmlFor={"description"} className="form-label">Description: </label>
                <textarea className={"form-control"} rows={5} id={"description"}/>
            </div>
            <div className={"mb-3"}>
                <label htmlFor={"description"} className="form-label">Features: </label>
                <textarea className={"form-control"} rows={1} id={"description"} placeholder={"Feature 1, feature 2, ..."}/>
            </div>
            <hr/>
        </form>
        : null;

    return (
        <div className={"col"}>
            {add}
            {cases && cases.map((_, index) =>
                <Case key={index} cases={cases} setCases={setCases} index={index} isEdit={isEdit}/>
            )}
        </div>
    );
};


export default Cases;