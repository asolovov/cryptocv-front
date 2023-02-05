import LeftBarLayout from "@/components/leftBar/LeftBarLayout";
import React from "react";
import {ImLocation2, ImTelegram} from "react-icons/im";
import {MdEmail} from "react-icons/md";
import {SiGithub} from "react-icons/si";
import {IoLogoLinkedin} from "react-icons/io";
import EditSkills from "@/components/leftBar/skills/EditSkills";
import {editMainInfo} from "@/helpers/editMainInfoHelpers";

const EditLeftBar = ({mainInfo, setMainInfo}) => {
    const location =
        <DivMB3>
            <ImLocation2 className={"color-indigo mt-2"}/>
            <input
                type={"text"}
                className={"form-control"}
                value={mainInfo.location}
                onChange={event => editMainInfo(mainInfo, setMainInfo, event, "location")}
            />
        </DivMB3>;

    const contacts =
        <>
            <DivMB3>
                <MdEmail className={"color-indigo mt-2"}/>
                <input
                    type={"text"}
                    className={"form-control"}
                    value={mainInfo.contacts.email.value}
                    onChange={event => editMainInfo(mainInfo, setMainInfo, event, "contacts", "email", "value")}
                />
            </DivMB3>
            <DivMB3>
                <ImTelegram className={"color-indigo"}/>
                <input
                    type={"text"}
                    className={"form-control"}
                    value={mainInfo.contacts.tg.value}
                    onChange={event => editMainInfo(mainInfo, setMainInfo, event, "contacts", "tg", "value")}
                />
                <input
                    type={"text"}
                    className={"form-control"}
                    value={mainInfo.contacts.tg.link}
                    onChange={event => editMainInfo(mainInfo, setMainInfo, event, "contacts", "tg", "link")}
                />
            </DivMB3>
            <DivMB3>
                <SiGithub className={"color-indigo"}/>
                <input
                    type={"text"}
                    className={"form-control"}
                    value={mainInfo.contacts.github.value}
                    onChange={event => editMainInfo(mainInfo, setMainInfo, event, "contacts", "github", "value")}
                />
                <input
                    type={"text"}
                    className={"form-control"}
                    value={mainInfo.contacts.github.link}
                    onChange={event => editMainInfo(mainInfo, setMainInfo, event, "contacts", "github", "link")}
                />
            </DivMB3>
            <DivMB3>
                <IoLogoLinkedin className={"color-indigo"}/>
                <input
                    type={"text"}
                    className={"form-control"}
                    value={mainInfo.contacts.linkedIn.value}
                    onChange={event => editMainInfo(mainInfo, setMainInfo, event, "contacts", "linkedIn", "value")}
                />
                <input
                    type={"text"}
                    className={"form-control"}
                    value={mainInfo.contacts.linkedIn.link}
                    onChange={event => editMainInfo(mainInfo, setMainInfo, event, "contacts", "linkedIn", "link")}
                />
            </DivMB3>
        </>;

    const skills = <EditSkills mainInfo={mainInfo} setMainInfo={setMainInfo}/>;

    return (
        <LeftBarLayout location={location} contacts={contacts} skills={skills}/>
    );
};

const DivMB3 = ({children}) => {
    return (
        <div className={"mb-3"}>
            {children}
        </div>
    );
}

export default EditLeftBar;