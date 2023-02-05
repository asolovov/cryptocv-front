const CentralBarLayout = ({totalLikes, cases, background, education}) => {
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
};

export default CentralBarLayout;