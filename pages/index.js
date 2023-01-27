import Layout from "@/components/Layout";
import Header from "@/components/viewCV/Header";
import LeftBar from "@/components/viewCV/LeftBar";
import CentralBar from "@/components/viewCV/CentralBar";
import debounce from "lodash.debounce";
import {ethers} from "ethers";
import CVContract from "@/contracts/OnchainCVContract.json";
import {useCallback, useEffect, useState} from "react";

export default function Home() {
    const [mainInfo, setMainInfo] = useState({});
    const [cases, setCases] = useState({});
    const [totalLikes, setTotalLikes] = useState('');

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getTotalLikesDebounce = useCallback(
        debounce(async () => {
            await getTotalLikes();
        }, 250)
        , []
    )

    const getTotalLikes = async () => {
        const { ethereum } = window;

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const cVContract = new ethers.Contract(
            "0x5FbDB2315678afecb367f032d93F642f64180aa3",
            CVContract.abi,
            signer
        );

        const totalLikes = await cVContract.getTotalLikes();
        setTotalLikes(totalLikes.toString());
    }

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
                likes: element.likes.toString(),
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
        getTotalLikesDebounce();
        getCasesDebounce();
        getMainInfoDebounce();
    }, [getTotalLikesDebounce, getCasesDebounce, getMainInfoDebounce])


    const header = <Header mainInfo={mainInfo}/>
    const leftBar = <LeftBar mainInfo={mainInfo}/>
    const centralBar = <CentralBar mainInfo={mainInfo} cases={cases} totalLikes={totalLikes}/>

    return (
        <>
            {mainInfo.name
                ? <Layout header={header} leftBar={leftBar} centralBar={centralBar}/>
                : "Loading..."
            }
        </>
    )
}