import {useState} from "react";
import EditSkill from "@/components/leftBar/skills/EditSkill";
import {addInMainInfo} from "@/helpers/editMainInfoHelpers";

const EditSkills = ({mainInfo, setMainInfo}) => {
    const [newName, setNewName] = useState('');
    const [newDescription, setNewDescription] = useState('');

    return (
        <>
            <button
                className={"btn btn-secondary mt-3 w-100"}
                onClick={() => addInMainInfo(mainInfo, setMainInfo, "skills", { name: newName, description: newDescription })}
            >Add new skill</button>
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
            {mainInfo.skills && mainInfo.skills.map((_, index) =>
                <EditSkill  key={index} index={index} mainInfo={mainInfo} setMainInfo={setMainInfo}/>
            )}
        </>
    );
};

export default EditSkills;