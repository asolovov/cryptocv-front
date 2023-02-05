import CentralBarLayout from "@/components/centralBar/CentralBarLayout";
import VIewEducations from "@/components/centralBar/eductation/VIewEducations";
import ViewCases from "@/components/centralBar/cases/ViewCases";

const ViewCentralBar = ({mainInfo, totalLikes, cases, setCases, handleActiveAlert}) => {
    const {background, education} = mainInfo;

    const backgroundEl = <p>{background}</p>;
    const educationEl =  <VIewEducations educations={education}/>;
    const casesEl = <ViewCases cases={cases} setCases={setCases} handleActiveAlert={handleActiveAlert}/>;

    return (
        <CentralBarLayout cases={casesEl} education={educationEl} background={backgroundEl} totalLikes={totalLikes}/>
    );
};

export default ViewCentralBar;