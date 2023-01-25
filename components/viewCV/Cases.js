import Case from "@/components/viewCV/Case";

const Cases = ({cases}) => {
    cases.sort((a, b) => {
        return a.startDate - b.startDate;
    })

    return (
        <div className={"col"}>
            {cases && cases.map((element, index) =>
                <Case key={index} caseEl={element}/>
            )}
        </div>
    );
};


export default Cases;