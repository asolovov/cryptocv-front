import HeaderLayout from "@/components/header/HeaderLayout";
import styled from "styled-components";
import {AiOutlineEdit} from "react-icons/ai";

const ViewHeader = ({mainInfo, setIsEdit}) => {
    const {name, position, hello} = mainInfo;

    const nameEl =
        <>
            <h2 className="card-title me-auto">{name}</h2>
            <Edit onClick={() => setIsEdit(true)}/>
        </>;

    const positionEl = <h5 className="card-subtitle">{position}</h5>;
    const helloEl =
        <>
            <p className="card-text lead">{hello}{" "}
                <button className={"btn btn-sm btn-outline-light"} data-bs-toggle="modal" data-bs-target="#moreInfo">
                    Wait, I need more info
                </button>
            </p>
            <div className="modal modal-lg fade" id="moreInfo" tabIndex="-1" aria-labelledby="moreInfolLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body text-black">
                            <h5 className={"color-indigo"}>Why it is a web3 CV?</h5>
                            <p>All the information that you see - my name, position, description, location, skills,
                                cases and other is stored in blockchain. In this case I use blockchain as sort of
                                data base. You can use different methods to read it, but the easiest way is to visit this
                                web app.</p>
                            <h5 className={"color-indigo"}>How does it work?</h5>
                            <p>When you open a web page, front-end app (Next.js) fetches data from my CV smart-contract
                                deployed in Goerli blockchain test net using one of the web3 providers. Then the front-end
                            app process information for you to see it in the right way. </p>
                            <p>If you will try to set a like on one of the cases, you will need to install metamask in
                                your browser, connect to Goerli net and get Goerli test tokens, because when you set a
                                like, you are interacting with my CV smart-contract.</p>
                            <h5 className={"color-indigo"}>And more</h5>
                            <p>You can see the code of this front-end app and smart contract on my Github. This CV
                            is a pet-project where I use my solidity and front-end prototyping skills to show you how
                            it would work in your project.</p>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Got it!
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>;

    return (
        <HeaderLayout name={nameEl} position={positionEl} hello={helloEl}/>
    );
};

const Edit = styled(AiOutlineEdit)`
  margin-top: 6px;
  font-size: 30px;
  cursor: pointer;
  color: white;
`;

export default ViewHeader;