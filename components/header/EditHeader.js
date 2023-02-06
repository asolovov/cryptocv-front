import HeaderLayout from "@/components/header/HeaderLayout";
import styled from "styled-components";
import {AiFillEye} from "react-icons/ai";
import {editMainInfo} from "@/helpers/editMainInfoHelpers";
import {updateMainInfo} from "@/helpers/mainInfoHelpers";
import {connect} from "@/helpers/ethersHelpers";
import Link from "next/link";

const EditHeader = ({mainInfo, setMainInfo, setIsEdit, handleActiveAlert}) => {
    const {name, hello, helloPDF, position} = mainInfo;

    const handleUpdateMainInfo = async () => {
        const respond = await updateMainInfo(mainInfo);
        if (!respond.ok) {
            handleActiveAlert(respond.error, "danger");
        } else {
            handleActiveAlert("Main info updated successfully", "success");
        }
    }

    const handleConnect = async () => {
        const respond = await connect();
        if (!respond.ok) {
            handleActiveAlert(respond.error, "danger");
        } else {
            handleActiveAlert("You are connected successfully, now you can set likes on cases!", "success");
        }
    }

    const nameEl =
        <>
            <input type={"text"}
                   className="form-control w-50 me-auto"
                   value={name}
                   onChange={event => editMainInfo(mainInfo, setMainInfo, event, "name")}
            />
            <div className={"btn-group"}>
                <Link href={"/api/pdf"} download={"asolovov_cv.pdf"} className={"btn btn-outline-light"}>View PDF</Link>
                <button className={"btn btn-outline-light"} onClick={handleUpdateMainInfo}>Push Main Info</button>
                <button className={"btn btn-outline-light"} onClick={handleConnect}>Connect</button>
            </div>
            <View onClick={() => setIsEdit(false)}/>
        </>;

    const positionEl =
        <input type={"text"}
               className="form-control w-50 mt-2"
               value={position}
               onChange={event => editMainInfo(mainInfo, setMainInfo, event, "position")}
        />;

    const helloEl =
        <>
            <button type="button" className="btn btn-outline-light btn-sm mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                PDF Hello
            </button>
            <textarea
                className="form-control"
                value={hello}
                onChange={event => editMainInfo(mainInfo, setMainInfo, event, "hello")}
                rows={5}
            />
            <div className="modal modal-lg fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-black" id="exampleModalLabel">This hello text will be in PDF version</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <textarea
                                className="form-control"
                                value={helloPDF}
                                onChange={event => editMainInfo(mainInfo, setMainInfo, event, "helloPDF")}
                                rows={5}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>

    return (
        <HeaderLayout name={nameEl} position={positionEl} hello={helloEl}/>
    );
};

const View = styled(AiFillEye)`
  margin-top: 6px;
  font-size: 30px;
  cursor: pointer;
  color: white;
  margin-left: 10px;
`;

export default EditHeader;