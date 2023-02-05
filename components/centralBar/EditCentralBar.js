import CentralBarLayout from "@/components/centralBar/CentralBarLayout";
import EditEducations from "@/components/centralBar/eductation/EditEducations";
import EditCases from "@/components/centralBar/cases/EditCases";
import {editMainInfo} from "@/helpers/editMainInfoHelpers";

const EditCentralBar = ({mainInfo, setMainInfo, cases, setCases, totalLikes, handleActiveAlert, infuraApi}) => {
    const background = <textarea
        className={"form-control mb-3"}
        value={mainInfo.background}
        onChange={event => editMainInfo(mainInfo, setMainInfo, event, "background")}
        rows={5}
    />;

    const education =  <EditEducations mainInfo={mainInfo} setMainInfo={setMainInfo}/>;

    const casesEl = <EditCases cases={cases} setCases={setCases} handleActiveAlert={handleActiveAlert} infuraApi={infuraApi}/>;

    return (
        <CentralBarLayout cases={casesEl} education={education} background={background} totalLikes={totalLikes}/>
    );
};

export default EditCentralBar;