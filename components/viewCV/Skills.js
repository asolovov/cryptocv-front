import {useState} from "react";
import Skill from "@/components/viewCV/Skill";

const Skills = ({mainInfo, isEdit, setMainInfo}) => {
    const [newName, setNewName] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleNewSkill = () => {
        let newMainInfo = Object.create(mainInfo);
        newMainInfo.skills.push({ name: newName, description: newDescription });
        setMainInfo(newMainInfo);
    }

    const add = isEdit
        ?
        <>
            <button className={"btn btn-secondary mt-3 w-100"} onClick={handleNewSkill}>Add new skill</button>
            <input
                type={"text"}
                className={"form-control mt-3"}
                value={newName}
                onChange={event => setNewName(event.target.value)}
                placeholder={"skill name"}
            />
            <input
                type={"text"}
                className={"form-control mt-3"}
                value={newDescription}
                onChange={event => setNewDescription(event.target.value)}
                placeholder={"skill description"}
            />
        </>
        : null

    return (
        <>
            {add}
            {mainInfo.skills && mainInfo.skills.map((_, index) =>
                <Skill index={index} mainInfo={mainInfo} setMainInfo={setMainInfo} key={index} isEdit={isEdit}/>
            )}
        </>
    );

};

export default Skills;