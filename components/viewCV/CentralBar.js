import Cases from "@/components/viewCV/Cases";
import Education from "@/components/viewCV/Education";

const CentralBar = ({totalLikes, cases, background, education}) => {
    return (
        <div className={"container p-3"}>

            <div className={"d-flex"}>
                <span className={"color-indigo h5 me-auto"}>CASES</span>
                <span className={"color-indigo h5"}>TOTAL LIKES: {totalLikes}</span>
            </div>
            <hr className={"color-indigo"}/>
            <Cases cases={cases}/>

            <h5 className={"color-indigo"}>BACKGROUND</h5>
            <hr className={"color-indigo"}/>
            <p>{background}</p>

            <h5 className={"color-indigo"}>EDUCATION</h5>
            <hr className={"color-indigo"}/>
            <Education education={education}/>

        </div>
    );
};

export default CentralBar;