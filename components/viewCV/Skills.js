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
            <p>Add new skill</p>
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
            <button className={"btn btn-primary mt-3"} onClick={handleNewSkill}>Add</button>
        </>
        : null

    return (
        <>
            {add}
            {mainInfo.skills && mainInfo.skills.map((skill, index) =>
                <Skill index={index} skill={skill} mainInfo={mainInfo} setMainInfo={setMainInfo} key={index} isEdit={isEdit}/>
            )}
        </>
    );

};

export default Skills;