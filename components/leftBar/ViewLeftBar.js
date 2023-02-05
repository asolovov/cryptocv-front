import React from 'react';
import LeftBarLayout from "@/components/leftBar/LeftBarLayout";
import {ImLocation2, ImTelegram} from "react-icons/im";
import {MdEmail} from "react-icons/md";
import {SiGithub} from "react-icons/si";
import {IoLogoLinkedin} from "react-icons/io";
import ViewSkills from "@/components/leftBar/skills/ViewSkills";

const ViewLeftBar = ({mainInfo}) => {
    const {location, contacts, skills} = mainInfo;
    const {email, tg, github, linkedIn} = contacts;

    const locationEl = <p><ImLocation2 className={"color-indigo"}/> {location}</p>;

    const contactsEl =
        <>
            <p><MdEmail className={"color-indigo"}/> {email.value}</p>
            <p><ImTelegram className={"color-indigo"}/> <a href={tg.link}>{tg.value}</a></p>
            <p><SiGithub className={"color-indigo"}/> <a href={github.link}>{github.value}</a></p>
            <p><IoLogoLinkedin className={"color-indigo"}/> <a href={linkedIn.link}>{linkedIn.value}</a></p>
        </>;

    const skillsEl = <ViewSkills skills={skills}/>;


    return (
        <LeftBarLayout location={locationEl} contacts={contactsEl} skills={skillsEl}/>
    );
};

export default ViewLeftBar;