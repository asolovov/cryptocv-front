import {ImLocation2, ImTelegram} from "react-icons/im";
import {MdEmail} from "react-icons/md";
import {SiGithub} from "react-icons/si";
import {IoLogoLinkedin} from "react-icons/io";
import Skills from "@/components/viewCV/Skills";

const LeftBar = ({mainInfo, setMainInfo, isEdit}) => {
    let location, contacts, skills;

    if (isEdit) {

        const handleChangeMainInfo = (event, target) => {
            let newMainInfo = Object.assign({}, mainInfo);
            newMainInfo[target] = event.target.value;
            setMainInfo(newMainInfo);
        }

        const handleChangeContacts = (event, contact, target) => {
            let newMainInfo = Object.assign({}, mainInfo);
            newMainInfo["contacts"][contact][target] = event.target.value;
            setMainInfo(newMainInfo);
        }

        location =
            <DivMB3>
                <ImLocation2 className={"color-indigo mt-2"}/>
                <input
                    type={"text"}
                    className={"form-control"}
                    value={mainInfo.location}
                    onChange={event => handleChangeMainInfo(event, "location")}
                />
            </DivMB3>;

        contacts =
            <>
                <DivMB3>
                    <MdEmail className={"color-indigo mt-2"}/>
                    <input
                        type={"text"}
                        className={"form-control"}
                        value={mainInfo.contacts.email.value}
                        onChange={event => handleChangeContacts(event, "email", "value")}
                    />
                </DivMB3>
                <DivMB3>
                    <ImTelegram className={"color-indigo"}/>
                    <input
                        type={"text"}
                        className={"form-control"}
                        value={mainInfo.contacts.tg.value}
                        onChange={event => handleChangeContacts(event, "tg", "value")}
                    />
                    <input
                        type={"text"}
                        className={"form-control"}
                        value={mainInfo.contacts.tg.link}
                        onChange={event => handleChangeContacts(event, "tg", "link")}
                    />
                </DivMB3>
                <DivMB3>
                    <SiGithub className={"color-indigo"}/>
                    <input
                        type={"text"}
                        className={"form-control"}
                        value={mainInfo.contacts.github.value}
                        onChange={event => handleChangeContacts(event, "github", "value")}
                    />
                    <input
                        type={"text"}
                        className={"form-control"}
                        value={mainInfo.contacts.github.link}
                        onChange={event => handleChangeContacts(event, "github", "link")}
                    />
                </DivMB3>
                <DivMB3>
                    <IoLogoLinkedin className={"color-indigo"}/>
                    <input
                        type={"text"}
                        className={"form-control"}
                        value={mainInfo.contacts.linkedIn.value}
                        onChange={event => handleChangeContacts(event, "linkedIn", "value")}
                    />
                    <input
                        type={"text"}
                        className={"form-control"}
                        value={mainInfo.contacts.linkedIn.link}
                        onChange={event => handleChangeContacts(event, "linkedIn", "link")}
                    />
                </DivMB3>
            </>;

        skills = <Skills mainInfo={mainInfo} setMainInfo={setMainInfo} isEdit={true}/>;

    } else {

        location = <p><ImLocation2 className={"color-indigo"}/> {mainInfo.location}</p>;
        contacts =
            <>
                <p><MdEmail className={"color-indigo"}/> {mainInfo.contacts.email.value}</p>
                <p><ImTelegram className={"color-indigo"}/> <a href={mainInfo.contacts.tg.link}>{mainInfo.contacts.tg.value}</a></p>
                <p><SiGithub className={"color-indigo"}/> <a href={mainInfo.contacts.github.link}>{mainInfo.contacts.github.value}</a></p>
                <p><IoLogoLinkedin className={"color-indigo"}/> <a href={mainInfo.contacts.linkedIn.link}>{mainInfo.contacts.linkedIn.value}</a></p>
            </>;
        skills = <Skills mainInfo={mainInfo}/>;
    }

    return (
        <LBLayout
            location={location}
            contacts={contacts}
            skills={skills}
        />
    );

};

const DivMB3 = ({children}) => {
    return (
        <div className={"mb-3"}>
            {children}
        </div>
    );
}

const LBLayout = ({location, contacts, skills}) => {
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
}

export default LeftBar;