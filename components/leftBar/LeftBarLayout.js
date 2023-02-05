const LeftBarLayout = ({location, contacts, skills}) => {
    return (
        <div className={"container p-3"}>

            <div className={"d-flex"}>
                <h5 className={"color-indigo"}>LOCATION</h5>
            </div>
            <hr className={"color-indigo"}/>
            {location}

            <h5 className={"color-indigo"}>CONTACTS</h5>
            <hr className={"color-indigo"}/>
            {contacts}

            <h5 className={"color-indigo"}>SKILLS</h5>
            <hr className={"color-indigo"}/>
            {skills}

        </div>
    );
};

export default LeftBarLayout;