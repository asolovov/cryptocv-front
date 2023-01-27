import Case from "@/components/viewCV/Case";
import {ethers} from "ethers";
import CVContract from "@/contracts/OnchainCVContract.json";

const Cases = ({cases, setCases, isEdit}) => {

    const handlePushCase = async (event) => {
        event.preventDefault();
        const startDate = new Date(event.target.startDate.value).valueOf() / 1000;
        const endDate = new Date(event.target.endDate.value).valueOf() / 1000;

        const info = {
            name: event.target.name.value,
            link: event.target.link.value,
            performance: event.target.performance.value,
            team: event.target.team.value,
            description: event.target.description.value,
            features: event.target.features.value.split(", "),
        };

        const infoJSON = JSON.stringify(info);

        const { ethereum } = window;

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const cVContract = new ethers.Contract(
            "0x5FbDB2315678afecb367f032d93F642f64180aa3",
            CVContract.abi,
            signer
        );

        await cVContract.addCase(infoJSON, startDate, isNaN(endDate) ? 0 : endDate);
    }

    const add = isEdit
        ?
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