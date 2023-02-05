import {SiGoland, SiPostgresql, SiPython, SiSolidity, SiVercel} from "react-icons/si";
import {FaCode} from "react-icons/fa";

const icons = {
    Solidity: <SiSolidity className={"color-indigo"}/>,
    NextJS: <SiVercel className={"color-indigo"}/>,
    PSQL: <SiPostgresql className={"color-indigo"}/>,
    Python: <SiPython className={"color-indigo"}/>,
    GO: <SiGoland className={"color-indigo"}/>,
}

const VIewSkill = ({skill}) => {
    return (
        <div className={"mt-3"}>
            <h6>
                {icons[skill.name]
                    ? icons[skill.name]
                    : <FaCode className={"color-indigo"}/>
                } {skill.name}
            </h6>
            <small>{skill.description}</small>
        </div>
    );
};

export default VIewSkill;