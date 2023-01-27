import styled from "styled-components";
import {AiOutlineEdit, AiFillEye} from "react-icons/ai";
import Link from "next/link";
import {ethers} from "ethers";
import CVContract from "@/contracts/OnchainCVContract.json";

const Header = ({mainInfo, setMainInfo, isEdit}) => {
    let Name, Hello, Position;
    const {name, hello, position} = mainInfo;

    const handleChange = (target, event) => {
        let newMainInfo = Object.assign({}, mainInfo);
        newMainInfo[target] = event.target.value;
        setMainInfo(newMainInfo);
    }

    const pushMainInfo = async () => {
        const mainInfoJSON = JSON.stringify(mainInfo);
        const { ethereum } = window;

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const cVContract = new ethers.Contract(
            "0x5FbDB2315678afecb367f032d93F642f64180aa3",
            CVContract.abi,
            signer
        );

        await cVContract.updateMainInfo(mainInfoJSON);
    }

    const connect = async () => {
        const { ethereum } = window;
        await ethereum.request({ method: 'eth_requestAccounts' });
    }


    if (isEdit) {
        Name =
            <>
                <input type={"text"}
                       className="form-control w-50 me-auto"
                       value={name}
                       onChange={event => handleChange("name", event)}
                />
                <div className={"btn-group"}>
                    <button className={"btn btn-outline-light"} onClick={pushMainInfo}>Push Main Info</button>
                    <button className={"btn btn-outline-light"} onClick={connect}>Connect</button>
                </div>
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