import ViewCase from "@/components/centralBar/cases/ViewCase";

const ViewCases = ({cases, setCases, handleActiveAlert}) => {
    cases.sort((a, b) => a.startDate < b.startDate ? 1: -1);

    return (
        <div className={"col"}>
            {cases && cases.map((caseEl, index) =>
                <ViewCase key={index} caseEl={caseEl} setCases={setCases} handleActiveAlert={handleActiveAlert}/>
            )}
        </div>
    );
};

export default ViewCases;