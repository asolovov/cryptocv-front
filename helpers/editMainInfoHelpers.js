export const editMainInfo = (mainInfo, setMainInfo, event, target1, target2=null, target3=null) => {
    let newMainInfo = Object.assign({}, mainInfo);

    console.log(event);

    if (target3) {
        newMainInfo[target1][target2][target3] = event.target.value;
        setMainInfo(newMainInfo);
    } else if (target2) {
        newMainInfo[target1][target2] = event.target.value;
        setMainInfo(newMainInfo);
    } else {
        newMainInfo[target1] = event.target.value;
        setMainInfo(newMainInfo);
    }
}

export const addInMainInfo = (mainInfo, setMainInfo, target, value) => {
    let newMainInfo = Object.assign({}, mainInfo);
    newMainInfo[target].push(value);
    setMainInfo(newMainInfo);
}

export const upElement = (mainInfo, setMainInfo, index, target) => {
    if (index === 0) return;
    let newMainInfo = Object.assign({}, mainInfo);
    const element = newMainInfo[target].splice(index, 1)[0];
    newMainInfo[target].splice(index-1, 0, element);
    setMainInfo(newMainInfo);
}

export const downElement = (mainInfo, setMainInfo, index, target) => {
    let newMainInfo = Object.assign({}, mainInfo);
    if (index === newMainInfo.length - 1) return;
    const element = newMainInfo[target].splice(index, 1)[0];
    newMainInfo[target].splice(index+1, 0, element);
    setMainInfo(newMainInfo);
}

export const deleteElement = (mainInfo, setMainInfo, index, target) => {
    let newMainInfo = Object.assign({}, mainInfo);
    newMainInfo[target].splice(index, 1);
    setMainInfo(newMainInfo);
}