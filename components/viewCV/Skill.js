import {FaCode} from "react-icons/fa";
import {SiGoland, SiPostgresql, SiPython, SiSolidity, SiVercel} from "react-icons/si";

const icons = {
    Solidity: <SiSolidity className={"color-indigo"}/>,
    NextJS: <SiVercel className={"color-indigo"}/>,
    PSQL: <SiPostgresql className={"color-indigo"}/>,
    Python: <SiPython className={"color-indigo"}/>,
    GO: <SiGoland className={"color-indigo"}/>,
}

const Skill = ({index, mainInfo, setMainInfo, isEdit}) => {

    const deleteSkill = () => {
        let newMainInfo = Object.assign({}, mainInfo);
        newMainInfo.skills.splice(index, 1);
        setMainInfo(newMainInfo);
    }

    const upSkill = () => {
        if (index === 0) return;
        let newMainInfo = Object.assign({}, mainInfo);
        const element = newMainInfo.skills.splice(index, 1)[0];
        newMainInfo.skills.splice(index-1, 0, element);
        setMainInfo(newMainInfo);
    }

    const downSkill = () => {
        let newMainInfo = Object.assign({}, mainInfo);
        if (index === newMainInfo.length - 1) return;
        const element = newMainInfo.skills.splice(index, 1)[0];
        newMainInfo.skills.splice(index+1, 0, element);
        setMainInfo(newMainInfo);
    }

    const handleChange = (target, event) => {
        let newMainInfo = Object.assign({}, mainInfo);
        newMainInfo.skills[index][target] = event.target.value;
        setMainInfo(newMainInfo);
    }


    return (
        <>
            {isEdit ? <hr/> : null}
            <div className={"mt-3"}>
                {isEdit
                    ? <>
                        <input
                            className={"form-control mb-2"}
                            value={mainInfo.skills[index].name}
                            onChange={event => handleChange("name", event)}
                        />
                        <input
                            className={"form-control"}
                            value={mainInfo.skills[index].description}
                            onChange={event => handleChange("description", event)}
                        />
                    </>
                    : <>
                        <h6>{icons[mainInfo.skills[index].name]
                            ? icons[mainInfo.skills[index].name]
                            : <FaCode className={"color-indigo"}/>
                        }
                            {mainInfo.skills[index].name}
                        </h6>
                        <small>{mainInfo.skills[index].description}</small>
                    </>
                }
            </div>
            {isEdit
                ?
                <div className={"btn-group mt-2"}>
                    <button className={"btn btn-outline-danger"} onClick={deleteSkill}>Delete</button>
                    <button className={"btn btn-outline-success"} onClick={upSkill}>Up</button>
                    <button className={"btn btn-outline-primary"} onClick={downSkill}>Down</button>
                </div>
                : null}
        </>
    );
};

export default Skill;