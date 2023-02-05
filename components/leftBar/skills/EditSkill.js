import {deleteElement, downElement, editMainInfo, upElement} from "@/helpers/editMainInfoHelpers";

const EditSkill = ({index, mainInfo, setMainInfo}) => {
    return (
        <>
            <hr/>
            <div className={"mt-3"}>
                <input
                    className={"form-control mb-2"}
                    value={mainInfo.skills[index].name}
                    onChange={event => editMainInfo(mainInfo, setMainInfo, event, "skills", index, "name")}
                />
                <input
                    className={"form-control"}
                    value={mainInfo.skills[index].description}
                    onChange={event => editMainInfo(mainInfo, setMainInfo, event, "skills", index, "description")}
                />
            </div>
            <div className={"btn-group mt-2"}>
                <button
                    className={"btn btn-outline-danger"}
                    onClick={() => deleteElement(mainInfo, setMainInfo, index, "skills")}
                >Delete</button>
                <button
                    className={"btn btn-outline-success"}
                    onClick={() => upElement(mainInfo, setMainInfo, index, "skills")}
                >Up</button>
                <button
                    className={"btn btn-outline-primary"}
                    onClick={() => downElement(mainInfo, setMainInfo, index, "skills")}
                >Down</button>
            </div>
        </>
    );
};

export default EditSkill;