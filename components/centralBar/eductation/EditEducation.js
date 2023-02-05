import {deleteElement, downElement, editMainInfo, upElement} from "@/helpers/editMainInfoHelpers";

const EditEducation = ({index, mainInfo, setMainInfo}) => {
    return (
        <>
            <div className={"input-group mb-2"}>
                <button
                    onClick={() => deleteElement(mainInfo, setMainInfo, index, "education")}
                    className={"btn btn-outline-danger"}
                >Delete</button>
                <input
                    className={"form-control"}
                    value={mainInfo.education[index].year}
                    onChange={event => editMainInfo(mainInfo, setMainInfo, event, "education", index, "year")}
                />
                <input
                    className={"form-control w-50"}
                    value={mainInfo.education[index].description}
                    onChange={event => editMainInfo(mainInfo, setMainInfo, event, "education", index, "description")}
                />
                <button
                    onClick={() => upElement(mainInfo, setMainInfo, index, "education")}
                    className={"btn btn-outline-success"}
                >Up</button>
                <button
                    onClick={() => downElement(mainInfo, setMainInfo, index, "education")}
                    className={"btn btn-outline-primary"}
                >Down</button>
            </div>
        </>
    );
};

export default EditEducation;