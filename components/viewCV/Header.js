import styled from "styled-components";
import {AiOutlineEdit, AiFillEye} from "react-icons/ai";
import Link from "next/link";

const Header = ({mainInfo, setMainInfo, isEdit, push}) => {
    let Name, Hello, Position;
    const {name, hello, position} = mainInfo;

    console.log("Header", mainInfo)

    const handleChange = (target, event) => {
        let newMainInfo = Object.assign({}, mainInfo);
        newMainInfo[target] = event.target.value;
        setMainInfo(newMainInfo);
    }

    if (isEdit) {
        Name =
            <>
                <input type={"text"}
                       className="form-control w-50 me-auto"
                       value={name}
                       onChange={event => handleChange("name", event)}
                />
                <button className={"btn btn-outline-light"} onClick={push}>Push Main Info</button>
                <Link href={"/"}>
                    <View/>
                </Link>
            </>;

        Position =
            <input type={"text"}
                   className="form-control w-50 mt-2"
                   value={position}
                   onChange={event => handleChange("position", event)}
            />;

        Hello =
            <textarea
                className="form-control"
                value={hello}
                onChange={event => handleChange("hello", event)}
                rows={7}
            />;

    } else {
        Name =
            <>
                <h2 className="card-title me-auto">{name}</h2>
                <Link href={"/edit"}>
                    <Edit/>
                </Link>
            </>;

        Position = <h5 className="card-subtitle">{position}</h5>;
        Hello = <p className="card-text lead">{hello}</p>;

    }

    return (
      <LayoutH name={Name} position={Position} hello={Hello}/>
    );
};

const LayoutH = ({name, position, hello}) => {
    return (
        <div className="card-body">
            <div className={"d-flex"}>
                {name}
            </div>
            {position}
            <hr/>
            {hello}
        </div>
    );
}

const Edit = styled(AiOutlineEdit)`
  margin-top: 6px;
  font-size: 30px;
  cursor: pointer;
  color: white;
`;

const View = styled(AiFillEye)`
  margin-top: 6px;
  font-size: 30px;
  cursor: pointer;
  color: white;
  margin-left: 10px;
`;

export default Header;