import Layout from "@/components/Layout";
import Header from "@/components/viewCV/Header";
import {useCallback, useEffect, useState} from "react";
import LeftBar from "@/components/viewCV/LeftBar";
import CentralBar from "@/components/viewCV/CentralBar";
import {ethers} from "ethers";
import CVContract from "@/contracts/OnchainCVContract.json";
import debounce from "lodash.debounce";

const Edit = () => {
    const [mainInfo, setMainInfo] = useState({});
    const [cases, setCases] = useState({});

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getMainInfoDebounce = useCallback(
        debounce(async () => {
            await getMainInfo();
        }, 250)
        , []
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getCasesDebounce = useCallback(
        debounce(async () => {
            await getCases();
        }, 250)
        , []
    )

    const getCases = async () => {
        const { ethereum } = window;

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const cVContract = new ethers.Contract(
            "0x5FbDB2315678afecb367f032d93F642f64180aa3",
            CVContract.abi,
            signer
        );

        const Cases = await cVContract.getCases();
        let cases = [];
        for (let i = 0; i < Cases.length; i++) {
            const element = Cases[i];
            const info = JSON.parse(element.info)

            cases.push({
                id: element.id.toString(),
                info: info,
                startDate: element.startDate.toString(),
                endDate: element.endDate.toString(),
            })
        }

        setCases(cases);
    }

    const getMainInfo = async () => {
        const { ethereum } = window;

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const cVContract = new ethers.Contract(
            "0x5FbDB2315678afecb367f032d93F642f64180aa3",
            CVContract.abi,
            signer
        );

        const MainInfo = await cVContract.getMainInfo();
        const mainInfo = JSON.parse(MainInfo);
        setMainInfo(mainInfo);
    }

    useEffect(() => {
        getCasesDebounce();
        getMainInfoDebounce();
    }, [getCasesDebounce, getMainInfoDebounce])

    const header = <Header
        mainInfo={mainInfo}
        setMainInfo={setMainInfo}
        isEdit={true}
    />

    const leftBar = <LeftBar
        setMainInfo={setMainInfo}
        mainInfo={mainInfo}
        isEdit={true}
    />

    const centralBar = <CentralBar
        mainInfo={mainInfo}
        setMainInfo={setMainInfo}
        cases={cases}
        setCases={setCases}
        totalLikes={1}
        isEdit={true}
    />

    return (
        <>
            {mainInfo.name
                ?  <Layout header={header} leftBar={leftBar} centralBar={centralBar}/>
                : 'Loading...'
            }
        </>
    );
};

export default Edit;