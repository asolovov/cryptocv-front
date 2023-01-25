import {AiFillMinusCircle} from "react-icons/ai";
import styled from "styled-components";
import {FaCode} from "react-icons/fa";
import {SiGoland, SiPostgresql, SiPython, SiSolidity, SiVercel} from "react-icons/si";
import {BsFillArrowUpCircleFill, BsFillArrowDownCircleFill} from "react-icons/bs";

const icons = {
    Solidity: <SiSolidity className={"color-indigo"}/>,
    NextJS: <SiVercel className={"color-indigo"}/>,
    PSQL: <SiPostgresql className={"color-indigo"}/>,
    Python: <SiPython className={"color-indigo"}/>,
    GO: <SiGoland className={"color-indigo"}/>,
}

const Skill = ({skill, index, mainInfo, setMainInfo, isEdit}) => {

    const deleteSkill = () => {
        let newMainInfo = Object.create(mainInfo);
        newMainInfo.skills.splice(index, 1);
        setMainInfo(newMainInfo);
    }

    const upSkill = () => {
        if (index === 0) return;
        let newMainInfo = Object.create(mainInfo);
        const element = newMainInfo.skills.splice(index, 1)[0];
        newMainInfo.skills.splice(index-1, 0, element);
        setMainInfo(newMainInfo);
    }

    const downSkill = () => {
        let newMainInfo = Object.create(mainInfo);
        if (index === newMainInfo.length - 1) return;
        const element = newMainInfo.skills.splice(index, 1)[0];
        newMainInfo.skills.splice(index+1, 0, element);
        setMainInfo(newMainInfo);
    }

    const name = isEdit
        ? <h6>{<Minus onClick={deleteSkill}/>} {skill.name}</h6>
        : <h6>{icons[skill.name] ? icons[skill.name] : <FaCode className={"color-indigo"}/>} {skill.name}</h6>


    return (
        <>
            {isEdit ? <hr/> : null}
            <div className={"mt-3"}>
                {name}
                <small>{skill.description}</small>
            </div>
            {isEdit ? <><Up onClick={upSkill}/><Down onClick={downSkill}/></> : null}
        </>
    );
};

const Minus = styled(AiFillMinusCircle)`
  color: #6610f2;
  cursor: pointer;
`;

const Up = styled(BsFillArrowUpCircleFill)`
  color: #6610f2;
  cursor: pointer;
`

const Down = styled(BsFillArrowDownCircleFill)`
  color: #6610f2;
  cursor: pointer;
`

export default Skill;