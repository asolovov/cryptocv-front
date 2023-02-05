import {useEffect, useState} from "react";
import Alert from "@/components/Alert";
import {isUserContractOwner} from "@/helpers/ethersHelpers";

const NotOwnerAlert = () => {
    const [isAlert, setIsAlert] = useState(false);

    useEffect(() => {
        const isNotOwnerInfo = localStorage.getItem("isNotOwnerInfo");
        if (!isNotOwnerInfo) {
            isUserContractOwner().then(r => setIsAlert(!r));
        }
    }, [])

    const handleCloseAlert = () => {
        localStorage.setItem("isNotOwnerInfo", "true");
        setIsAlert(false);
    }

    if (isAlert) {
        return (
            <Alert
                type={"info"}
                text={`Hello there! You are not smart-contract owner that's why you can't edit my CV. But you are welcome 
                to see how il all works here. You won't see this alert again. Enjoy!`}
                close={handleCloseAlert}
            />
        );
    } else return null;

};

export default NotOwnerAlert;