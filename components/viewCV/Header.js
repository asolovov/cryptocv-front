import styled from "styled-components";
import {AiOutlineEdit, AiFillEye} from "react-icons/ai";
import Link from "next/link";

const Header = ({name, setName, position, setPosition, hello, setHello, isEdit}) => {
    if (isEdit) {
        return (
            <div className="card-body">
                <div className={"d-flex"}>
                    <input type={"text"}
                           className="form-control w-50 me-auto"
                           value={name}
                           onChange={(event) => setName(event.target.value)}
                    />
                    <Link href={"/"}>
                        <View/>
                    </Link>
                </div>
                <input type={"text"}
                       className="form-control w-50 mt-2"
                       value={position}
                       onChange={(event) => setPosition(event.target.value)}
                />
                <hr/>
                <textarea
                    className="form-control"
                    value={hello}
                    onChange={(event) => setHello(event.target.value)}
                    rows={7}
                />
            </div>
        );
    } else {
        return (
            <div className="card-body">
                <div className={"d-flex"}>
                    <h2 className="card-title me-auto">{name}</h2>
                    <Link href={"/edit"}>
                        <Edit/>
                    </Link>
                </div>
                <h5 className="card-subtitle">{position}</h5>
                <hr/>
                <p className="card-text lead">{hello}</p>
            </div>
        );
    }
};

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
`;

export default Header;