import Cases from "@/components/viewCV/Cases";
import Educations from "@/components/viewCV/Educations";

const CentralBar = ({mainInfo, setMainInfo, cases, setCases, totalLikes, isEdit}) => {
    let background, education;

    const handleSetBackground = (event) => {
        let newMainInfo = Object.create(mainInfo);
        newMainInfo.background = event.target.value;
        setMainInfo(newMainInfo);
    }

    if (isEdit) {
        background = <textarea className={"form-control mb-3"} value={mainInfo.background} onChange={event => handleSetBackground(event)} rows={5}/>;
        education =  <Educations mainInfo={mainInfo} setMainInfo={setMainInfo} isEdit={true}/>;
        cases = <Cases cases={cases} setCases={setCases} isEdit={true}/>;
    } else {
        background = <p>{mainInfo.background}</p>;
        education =  <Educations mainInfo={mainInfo}/>;
        cases = <Cases cases={cases}/>;
    }

    return (
        <LayoutCB education={education} background={background} totalLikes={totalLikes} cases={cases}/>
    );
};

const LayoutCB = ({cases, background, education, totalLikes}) => {
    return (
        <div className={"container p-3"}>

            <div className={"d-flex"}>
                <span className={"color-indigo h5 me-auto"}>CASES</span>
                <span className={"color-indigo h5"}>TOTAL LIKES: {totalLikes}</span>
            </div>
            <hr className={"color-indigo"}/>
            {cases}

            <h5 className={"color-indigo"}>BACKGROUND</h5>
            <hr className={"color-indigo"}/>
            {background}

            <h5 className={"color-indigo"}>EDUCATION</h5>
            <hr className={"color-indigo"}/>
            {education}

        </div>
    );
}

export default CentralBar;