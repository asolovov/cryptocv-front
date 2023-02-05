import Layout from "@/components/Layout";
import {useEffect, useState} from "react";
import ViewHeader from "@/components/header/ViewHeader";
import ViewLeftBar from "@/components/leftBar/ViewLeftBar";
import EditHeader from "@/components/header/EditHeader";
import EditLeftBar from "@/components/leftBar/EditLeftBar";
import EditCentralBar from "@/components/centralBar/EditCentralBar";
import ViewCentralBar from "@/components/centralBar/ViewCentralBar";
import {getMainInfo} from "@/helpers/mainInfoHelpers";
import {getTotalLikes} from "@/helpers/likesHelpers";
import {getCases} from "@/helpers/casesHelpers";
import Alert from "@/components/Alert";
import NotOwnerAlert from "@/components/NotOwnerAlert";

export default function Home({infuraApi}) {
    const [isEdit, setIsEdit] = useState(false);
    const [mainInfo, setMainInfo] = useState({});
    const [cases, setCases] = useState([]);
    const [totalLikes, setTotalLikes] = useState("-");
    const [isFailedFetch, setIsFailedFetch] = useState(false);
    const [errors, setErrors] = useState([]);
    const [isAlert, setIsAlert] = useState(false);
    const [alertText, setAlertText] = useState("");
    const [alertType, setAlertType] = useState("");

    const handleActiveAlert = (text, type) => {
        setAlertType(type);
        setAlertText(text);
        setIsAlert(true);
    }

    const handleCloseAlert = () => {
        setAlertType("");
        setAlertText("");
        setIsAlert(false);
    }

    useEffect(() => {
        getCases({infuraApi}).then(r => {
                if (!r.ok) {
                    handleFetchError(r, setIsFailedFetch, errors, setErrors);
                } else setCases(r.cases);
            });
        getTotalLikes({infuraApi}).then(r => {
            if (!r.ok) {
                handleFetchError(r, setIsFailedFetch, errors, setErrors);
            } else setTotalLikes(r.totalLikes.toString())
        });
        getMainInfo({infuraApi}).then(r => {
            if (!r.ok) {
                handleFetchError(r, setIsFailedFetch, errors, setErrors);
            } else setMainInfo(r.mainInfo);
        });
    }, [setCases, setTotalLikes, setMainInfo, errors, infuraApi])

    let header, leftBar, centralBar;

    if (isEdit) {
        header = <EditHeader mainInfo={mainInfo} setMainInfo={setMainInfo} setIsEdit={setIsEdit} handleActiveAlert={handleActiveAlert}/>
        leftBar = <EditLeftBar mainInfo={mainInfo} setMainInfo={setMainInfo}/>
        centralBar = <EditCentralBar
            mainInfo={mainInfo}
            setMainInfo={setMainInfo}
            cases={cases}
            setCases={setCases}
            totalLikes={totalLikes}
            handleActiveAlert={handleActiveAlert}
            infuraApi={infuraApi}
        />
    } else {
        header = <ViewHeader mainInfo={mainInfo} setIsEdit={setIsEdit}/>
        leftBar = <ViewLeftBar mainInfo={mainInfo}/>
        centralBar = <ViewCentralBar mainInfo={mainInfo} cases={cases} totalLikes={totalLikes} setCases={setCases} handleActiveAlert={handleActiveAlert}/>
    }

    return (
        <>
            {mainInfo.name
                ?
                <Layout header={header} leftBar={leftBar} centralBar={centralBar}>
                    {isEdit && <NotOwnerAlert/>}
                    {isAlert && <Alert close={handleCloseAlert} text={alertText} type={alertType}/>}
                </Layout>
                : isFailedFetch ? "I hope you will never see this..." : "Loading..."
            }
        </>
    )
}

export const getStaticProps = async () => {
    const infuraApi = process.env.INFURA_API;

    return {
        props: {infuraApi: infuraApi}
    }
}

const handleFetchError = (r, setIsFailedFetch, errors, setErrors) => {
    setIsFailedFetch(true);
    let newErrors = Array.from(errors)
    newErrors.push(r.error)
    setErrors(newErrors);
}