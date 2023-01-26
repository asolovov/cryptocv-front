const Education = ({index, mainInfo, setMainInfo, isEdit}) => {

    const deleteEd = () => {
        let newMainInfo = Object.assign({}, mainInfo);
        newMainInfo.education.splice(index, 1);
        setMainInfo(newMainInfo);
    }

    const upEd = () => {
        if (index === 0) return;
        let newMainInfo = Object.assign({}, mainInfo);
        const element = newMainInfo.education.splice(index, 1)[0];
        newMainInfo.education.splice(index-1, 0, element);
        setMainInfo(newMainInfo);
    }

    const downEd = () => {
        let newMainInfo = Object.assign({}, mainInfo);
        if (index === newMainInfo.length - 1) return;
        const element = newMainInfo.education.splice(index, 1)[0];
        newMainInfo.education.splice(index+1, 0, element);
        setMainInfo(newMainInfo);
    }

    const handleChange = (target, event) => {
        let newMainInfo = Object.assign({}, mainInfo);
        newMainInfo.education[index][target] = event.target.value;
        setMainInfo(newMainInfo);
    }

    return (
        <>
        {isEdit
            ?
                <div className={"input-group mb-2"}>
                    <button onClick={deleteEd} className={"btn btn-outline-danger"}>Delete</button>
                    <input
                        className={"form-control"}
                        value={mainInfo.education[index].year}
                        onChange={event => handleChange("year", event)}
                    />
                    <input
                        className={"form-control w-50"}
                        value={mainInfo.education[index].description}
                        onChange={event => handleChange("description", event)}
                    />
                    <button onClick={upEd} className={"btn btn-outline-success"}>Up</button>
                    <button onClick={downEd} className={"btn btn-outline-primary"}>Down</button>
                </div>
            : <li className="list-group-item">{mainInfo.education[index].year} {mainInfo.education[index].description}</li>
        }
        </>
    );
};

export default Education;